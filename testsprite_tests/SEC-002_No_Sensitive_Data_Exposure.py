import asyncio
from playwright import async_api
from playwright.async_api import expect

async def run_test():
    pw = None
    browser = None
    context = None
    
    try:
        # Start a Playwright session in asynchronous mode
        pw = await async_api.async_playwright().start()
        
        # Launch a Chromium browser in headless mode with custom arguments
        browser = await pw.chromium.launch(
            headless=True,
            args=[
                "--window-size=1280,720",         # Set the browser window size
                "--disable-dev-shm-usage",        # Avoid using /dev/shm which can cause issues in containers
                "--ipc=host",                     # Use host-level IPC for better stability
                "--single-process"                # Run the browser in a single process mode
            ],
        )
        
        # Create a new browser context (like an incognito window)
        context = await browser.new_context()
        context.set_default_timeout(5000)
        
        # Open a new page in the browser context
        page = await context.new_page()
        
        # Navigate to your target URL and wait until the network request is committed
        await page.goto("http://localhost:3001", wait_until="commit", timeout=10000)
        
        # Wait for the main page to reach DOMContentLoaded state (optional for stability)
        try:
            await page.wait_for_load_state("domcontentloaded", timeout=3000)
        except async_api.Error:
            pass
        
        # Iterate through all iframes and wait for them to load as well
        for frame in page.frames:
            try:
                await frame.wait_for_load_state("domcontentloaded", timeout=3000)
            except async_api.Error:
                pass
        
        # Interact with the page elements to simulate user flow
        # -> Open browser console and check for any logged sensitive data or PII.
        frame = context.pages[-1]
        # Click 'Get Started' button to ensure no sensitive data is revealed on interaction.
        elem = frame.locator('xpath=html/body/nav/div/div/div[2]/a/button').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # --> Assertions to verify final state
        frame = context.pages[-1]
        await expect(frame.locator('text=KaizenSpark Tech').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Continuous Innovation, Exponential Growth').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=We build intelligent, scalable software that drives growth. From AI/ML solutions to full-stack development, we turn your vision into reality with cutting-edge technology and expert craftsmanship.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Explore Our Services').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=View Our Work').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=TRUSTED BY 500+ GLOBAL COMPANIES').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=TechFlow').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=MobileFirst').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=CloudScale').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=OptiFlow').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=DataSync').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=InnovateLab').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=+12%').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=$8.2M').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=2.3 min').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=98/100').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=350%').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=98%').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Custom Software Development').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Full-stack development').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=AI/ML Solutions').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Predictive analytics').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Web Development').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=React/Next.js').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Mobile App Development').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=iOS & Android').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Cloud Solutions').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Cloud migration').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Digital Transformation').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Process automation').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=SUCCESS STORIES').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Real Results That Inspire').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=300%').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=95%').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=10K+').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=TechFlow Inc').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=OUR TECHNOLOGY STACK').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=React').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Node.js').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=AWS').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=TensorFlow').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=React Native').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=PostgreSQL').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=WHY CHOOSE US').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=AI-First Approach').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=10x').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=2-4').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=50+').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=99.9%').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=INDUSTRIES WE SERVE').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Healthcare').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=HIPAA-compliant solutions for modern healthcare').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=FinTech').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Secure financial technology solutions').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=E-commerce').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Scalable online retail platforms').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Education').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Innovative EdTech solutions').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Manufacturing').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Industry 4.0 digital solutions').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Logistics').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Smart logistics and supply chain').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=TESTIMONIALS').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=What Our Raving Fans Say').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=KaizenSpark transformed our entire tech infrastructure. Their AI solutions helped us increase efficiency by 300% and reduce operational costs significantly.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Sarah Chen').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=CTO').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Ready to Transform Your Business?').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Let\'s build something amazing together. Start your digital transformation journey today.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Free consultation').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Subscribe to our newsletter for tech trends, industry insights, and exclusive updates.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=hello@kaizenspark.tech').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=+1 (555) 123-4567').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=123 Innovation Drive, Tech City, TC 12345').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=© 2025 KaizenSpark Tech. All rights reserved.').first).to_be_visible(timeout=30000)
        await asyncio.sleep(5)
    
    finally:
        if context:
            await context.close()
        if browser:
            await browser.close()
        if pw:
            await pw.stop()
            
asyncio.run(run_test())
    