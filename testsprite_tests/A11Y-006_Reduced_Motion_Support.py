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
        # -> Check for any visible animations or motion effects on the landing page and verify if they are disabled or reduced due to prefers-reduced-motion setting.
        await page.mouse.wheel(0, 600)
        

        # -> Interact with testimonial carousel controls to verify if animations are disabled or reduced due to prefers-reduced-motion setting.
        frame = context.pages[-1]
        # Click Next testimonial button to check carousel animation behavior
        elem = frame.locator('xpath=html/body/main/section[8]/div/div[2]/div/div[2]/button[2]').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Perform visual check on testimonial carousel animations to confirm they are disabled or reduced due to prefers-reduced-motion setting.
        frame = context.pages[-1]
        # Click Next testimonial button again to observe animation behavior visually
        elem = frame.locator('xpath=html/body/main/section[8]/div/div[2]/div/div[2]/button[2]').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        frame = context.pages[-1]
        # Click Previous testimonial button again to observe animation behavior visually
        elem = frame.locator('xpath=html/body/main/section[8]/div/div[2]/div/div[2]/button').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # --> Assertions to verify final state
        frame = context.pages[-1]
        await expect(frame.locator('text=⚡ CONTINUOUS INNOVATION, EXPONENTIAL GROWTH').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=TRANSFORM YOUR BUSINESS WITH AI-POWERED\nCUSTOM SOFTWARE SOLUTIONS').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=We build intelligent, scalable software that drives growth. From AI/ML solutions to full-stack development, we turn your vision into reality with cutting-edge technology and expert craftsmanship.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=TRUSTED BY 500+ GLOBAL COMPANIES').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=TechFlow').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=MobileFirst').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=CloudScale').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=OptiFlow').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=DataSync').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=InnovateLab').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Value Delivered').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=+12%').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=$8.2M').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=last 90 days').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Deployment Frequency').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=faster').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=2.3 min').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=avg to ship').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Quality & Reliability').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=98/100').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=release quality · MTTR 2.1h').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Client Outcomes').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=350%').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=avg ROI · Satisfaction 98%').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Winning Organizations Choose KaizenSpark').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Trusted by industry leaders across the globe').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=500+').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Projects Delivered').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=98%').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Client Satisfaction').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=15+').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Countries Served').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=50+').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Technologies Mastered').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Custom Software Development').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Tailored solutions built from the ground up to perfectly match your unique business requirements and scale with your growth.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Full-stack development').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Scalable architecture').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Agile methodology').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=AI/ML Solutions').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Harness the power of artificial intelligence and machine learning to automate processes, gain insights, and stay ahead of competition.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Predictive analytics').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Natural language processing').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Computer vision').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Web Development').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Modern, responsive, and high-performing web applications that deliver exceptional user experiences across all devices.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=React/Next.js').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Progressive web apps').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=E-commerce solutions').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Mobile App Development').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Native and cross-platform mobile applications that engage users and drive business growth on iOS and Android.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=iOS & Android').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Cross-platform').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=App modernization').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Cloud Solutions').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Scalable, secure, and cost-effective cloud infrastructure and migration services on AWS, Azure, and Google Cloud.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Cloud migration').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=DevOps automation').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Microservices').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Digital Transformation').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Comprehensive strategy and execution to modernize your business operations and unlock new growth opportunities.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Process automation').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Legacy modernization').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Change management').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=SUCCESS STORIES').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Real Results That Inspire').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Revenue Growth (300%)').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Time Saved (95%)').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Active Users (10K+)').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=TechFlow Inc • SaaS • Enterprise').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=How TechFlow 3x'd Their Revenue with AI-Powered Analytics').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=The Challenge').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=TechFlow struggled with fragmented data sources and manual reporting processes that took weeks to complete, hindering their ability to make data-driven decisions.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Our Solution').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=We built a custom AI-powered analytics platform that unified all data sources, automated reporting, and provided real-time predictive insights using machine learning.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=300%').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Revenue Growth').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=95%').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Time Saved').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=10K+').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Active Users').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=OUR TECHNOLOGY STACK').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Powered by Cutting-Edge Technology').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Industry-specific capabilities with robust and specialized AI to deliver enterprise-grade solutions').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Frontend').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=React').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Next.js').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Vue').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Angular').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=TypeScript').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Tailwind CSS').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Backend').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Node.js').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Python').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Java').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=.NET').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Go').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=PHP').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Cloud & DevOps').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=AWS').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Azure').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Google Cloud').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Docker').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Kubernetes').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Terraform').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=AI & Machine Learning').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=TensorFlow').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=PyTorch').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=OpenAI').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Hugging Face').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=LangChain').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Anthropic').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Mobile').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=React Native').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Flutter').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Swift').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Kotlin').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Expo').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Ionic').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Database').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=PostgreSQL').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=MongoDB').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Redis').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=MySQL').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Elasticsearch').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Supabase').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=WHY CHOOSE US').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Why Leading Teams Choose KaizenSpark').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=AI-First Approach').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Leverage cutting-edge AI and machine learning technologies to build intelligent solutions that give you a competitive advantage in the market.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=10x').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Faster Development').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Agile Excellence').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Our proven agile methodology ensures rapid delivery, continuous improvement, and complete transparency throughout the development process.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=2-4').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Week Sprints').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Full-Stack Mastery').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=End-to-end expertise from frontend to backend, cloud to mobile, with a dedicated team of senior engineers and solution architects.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=50+').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Technologies').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Enterprise Security').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Bank-grade security standards, compliance certifications, and rigorous testing ensure your data and applications are always protected.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=99.9%').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Uptime SLA').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=INDUSTRIES WE SERVE').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Tailored Solutions for Every Industry').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Healthcare').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=HIPAA-compliant solutions for modern healthcare').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Telemedicine platforms').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Patient portals').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Healthcare analytics').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=FinTech').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Secure financial technology solutions').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Payment processing').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Banking apps').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Blockchain integration').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=E-commerce').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Scalable online retail platforms').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Marketplace development').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Inventory management').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Payment integration').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Education').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Innovative EdTech solutions').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Learning management').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Virtual classrooms').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Assessment tools').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Manufacturing').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Industry 4.0 digital solutions').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=IoT integration').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Supply chain optimization').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Quality control').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Logistics').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Smart logistics and supply chain').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Route optimization').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Fleet management').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Real-time tracking').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=TESTIMONIALS').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=What Our Raving Fans Say').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Working with KaizenSpark was a game-changer. They delivered our mobile app ahead of schedule and exceeded all our expectations in terms of quality and performance.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Michael Rodriguez').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=CEO').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=MobileFirst Solutions').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Ready to Transform Your Business?').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Let\'s build something amazing together. Start your digital transformation journey today.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Start Your Project').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Schedule a Call').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Free consultation').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=No commitment required').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Response in 24 hours').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Subscribe to our newsletter for tech trends, industry insights, and exclusive updates').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=K').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=KaizenSpark Tech').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Continuous Innovation, Exponential Growth. AI-powered solutions and custom software development that transform businesses.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=hello@kaizenspark.tech').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=+1 (555) 123-4567').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=123 Innovation Drive, Tech City, TC 12345').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Services').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Custom Software Development').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=AI/ML Solutions').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Web Development').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Mobile App Development').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Cloud Solutions').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Digital Transformation').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Company').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=About Us').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Portfolio').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Case Studies').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Careers').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Contact').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Resources').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Blog').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Documentation').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Resources').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=FAQ').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Support').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Legal').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Privacy Policy').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Terms of Service').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Cookie Policy').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Security').first).to_be_visible(timeout=30000)
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
    