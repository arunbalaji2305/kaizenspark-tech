#!/usr/bin/env python3
"""
TestSprite Comprehensive Test Runner
Runs all tests and generates a detailed report
"""

import os
import sys
import json
import asyncio
from datetime import datetime
from pathlib import Path

# Test categories
TEST_CATEGORIES = {
    'Functional': ['FT-001', 'FT-002', 'FT-003', 'FT-004', 'FT-005', 'FT-006', 'FT-007', 'FT-008', 'FT-009', 'FT-010', 'FT-011', 'FT-012'],
    'Accessibility': ['A11Y-001', 'A11Y-002', 'A11Y-003', 'A11Y-004', 'A11Y-005', 'A11Y-006', 'A11Y-007', 'A11Y-008'],
    'Performance': ['PERF-001', 'PERF-002', 'PERF-003', 'PERF-004', 'PERF-005'],
    'SEO': ['SEO-001', 'SEO-002'],
    'Security': ['SEC-001', 'SEC-002', 'SEC-003'],
    'Responsive': ['RES-001', 'RES-002', 'RES-003']
}

def find_test_files():
    """Find all test files in the testsprite_tests directory"""
    test_dir = Path(__file__).parent / 'testsprite_tests'
    test_files = {}
    
    for category, test_ids in TEST_CATEGORIES.items():
        for test_id in test_ids:
            # Find the test file
            test_file = list(test_dir.glob(f'{test_id}_*.py'))
            if test_file:
                test_files[test_id] = {
                    'category': category,
                    'file': test_file[0],
                    'name': test_file[0].stem.replace('_', ' ')
                }
    
    return test_files

async def run_single_test(test_id, test_info):
    """Run a single test and return the result"""
    print(f"Running {test_id}: {test_info['name']}...", end=' ')
    
    try:
        # Run the test
        proc = await asyncio.create_subprocess_exec(
            'python',
            str(test_info['file']),
            stdout=asyncio.subprocess.PIPE,
            stderr=asyncio.subprocess.PIPE
        )
        
        stdout, stderr = await asyncio.wait_for(proc.communicate(), timeout=30)
        
        # Check if test passed
        if proc.returncode == 0:
            print("[PASSED]")
            return {
                'id': test_id,
                'name': test_info['name'],
                'category': test_info['category'],
                'status': 'PASSED',
                'error': None
            }
        else:
            error_msg = stderr.decode('utf-8') if stderr else stdout.decode('utf-8')
            print("[FAILED]")
            return {
                'id': test_id,
                'name': test_info['name'],
                'category': test_info['category'],
                'status': 'FAILED',
                'error': error_msg[:500]  # Limit error message length
            }
    
    except asyncio.TimeoutError:
        print("[TIMEOUT]")
        return {
            'id': test_id,
            'name': test_info['name'],
            'category': test_info['category'],
            'status': 'TIMEOUT',
            'error': 'Test exceeded 30 second timeout'
        }
    except Exception as e:
        print(f"[ERROR]: {str(e)}")
        return {
            'id': test_id,
            'name': test_info['name'],
            'category': test_info['category'],
            'status': 'ERROR',
            'error': str(e)
        }

async def run_all_tests():
    """Run all tests and generate report"""
    print("="*80)
    print("TestSprite Comprehensive Test Suite")
    print("="*80)
    print()
    
    test_files = find_test_files()
    total_tests = len(test_files)
    
    print(f"Found {total_tests} tests across {len(TEST_CATEGORIES)} categories")
    print()
    
    # Run all tests
    results = []
    for test_id, test_info in test_files.items():
        result = await run_single_test(test_id, test_info)
        results.append(result)
    
    print()
    print("="*80)
    print("Test Results Summary")
    print("="*80)
    print()
    
    # Calculate statistics
    passed = sum(1 for r in results if r['status'] == 'PASSED')
    failed = sum(1 for r in results if r['status'] == 'FAILED')
    timeout = sum(1 for r in results if r['status'] == 'TIMEOUT')
    error = sum(1 for r in results if r['status'] == 'ERROR')
    
    print(f"Total Tests: {total_tests}")
    print(f"[+] Passed:    {passed} ({passed/total_tests*100:.1f}%)")
    print(f"[-] Failed:    {failed} ({failed/total_tests*100:.1f}%)")
    print(f"[T] Timeout:   {timeout} ({timeout/total_tests*100:.1f}%)")
    print(f"[!] Error:     {error} ({error/total_tests*100:.1f}%)")
    print()
    
    # Category breakdown
    print("Category Breakdown:")
    print("-" * 80)
    for category in TEST_CATEGORIES.keys():
        cat_results = [r for r in results if r['category'] == category]
        cat_passed = sum(1 for r in cat_results if r['status'] == 'PASSED')
        cat_total = len(cat_results)
        if cat_total > 0:
            print(f"{category:15} {cat_passed}/{cat_total} ({cat_passed/cat_total*100:.1f}%)")
    
    print()
    
    # Failed tests details
    failed_tests = [r for r in results if r['status'] in ['FAILED', 'TIMEOUT', 'ERROR']]
    if failed_tests:
        print("Failed/Error Tests:")
        print("-" * 80)
        for test in failed_tests:
            print(f"[{test['status']}] {test['id']}: {test['name']}")
            if test['error']:
                print(f"  Error: {test['error'][:200]}")
        print()
    
    # Save results to JSON
    output = {
        'timestamp': datetime.now().isoformat(),
        'summary': {
            'total': total_tests,
            'passed': passed,
            'failed': failed,
            'timeout': timeout,
            'error': error,
            'pass_rate': f"{passed/total_tests*100:.1f}%"
        },
        'results': results
    }
    
    output_file = Path(__file__).parent / 'testsprite_tests' / 'test_results_new.json'
    with open(output_file, 'w') as f:
        json.dump(output, f, indent=2)
    
    print(f"Results saved to: {output_file}")
    print()
    
    return output

if __name__ == '__main__':
    asyncio.run(run_all_tests())

