var webdriver = require('selenium-webdriver');
//var ang = require('angular');

var browser = new webdriver.Builder()
        .withCapabilities(webdriver.Capabilities.chrome()).build();
 //       window.addEventListener('load', fullExample, false);

//window.addEventListener('DOMContentLoaded', fullExample, false);
fullExample();		
async function fullExample()
{
    try
    {
        await browser.get('https://nationwide.co.uk') ;
        

       // await webdriver.manage().window().maximize();
       //WebElement mortgageItem = _browser.findElement(webdriver.By.id('MortgagesNavItem'));
       //await ((JavascriptExecutor)driver).executeScript("$(browser.findElement(webdriver.By.id('MortgagesNavItem'))).hover();");
        //String mouseOverScript = "if(document.createEvent){var evObj = document.createEvent('MouseEvents');evObj.initEvent('mouseover',true, false); arguments[0].dispatchEvent(evObj);} else if(document.createEventObject) { arguments[0].fireEvent('onmouseover');}";
       //  ((JavascriptExecutor) driver).executeScript(mouseOverScript,browser.findElement(webdriver.By.id('MortgagesNavItem')));
       //const actions = await browser.actions({bridge: true}); 
        const actions = await browser.actions(); 
        await actions.pause(1000);
        var elem=await browser.findElement(webdriver.By.id('MortgagesNavItem')); 
        await actions.pause(1000);
        await actions.move({duration:5000,origin:elem,x:0,y:0}).perform();      
        await browser.findElement(webdriver.By.xpath(".//*[@id='MortgagesNavItem']/div/div/div/div/nav/ul/li[1]/a")).click();
        await browser.findElement(webdriver.By.id('selectorItemHaveNationwideMortgage1')).click();
        await browser.findElement(webdriver.By.id('selectorItemNationwideMortgageTypeNo2')).click();
        await browser.findElement(webdriver.By.id('SearchPropertyValue')).sendKeys("300000");
        await browser.findElement(webdriver.By.id('SearchMortgageAmount')).sendKeys("150000");
        await browser.findElement(webdriver.By.id('SearchMortgageTerm')).sendKeys("30");
        await browser.findElement(webdriver.By.id('myButton')).click(); 
        await actions.pause(9000);
   // driver.wait(until.browser.findElement(webdriver.By.id('fixed')), 1000)
        await browser.findElement(webdriver.By.id('fixed')).click();     
        await actions.pause(2000);
        await browser.findElement(webdriver.By.id('product-fee-fee')).click();
       // var val1 = await browser.findElements(webdriver.By.xpath(".//div[@class='ratesTableBody']/table"));
       // var val1 = await browser.findElements(webdriver.By.xpath(".//div[@class='ratesTableWrapper _3yr']/div/table"));
        //for (var i = 0; i< val1.length; i++)
        //{
         //  var rowVal = await val1[i].findElement(webdriver.By.xpath("//tr"));
           var rowVal = await browser.findElements(webdriver.By.xpath("//tr"));
           for (var j = 0; j< rowVal.length; j++)
            {
                var tenure = await rowVal[j].getAttribute("data-product-name");
                var rateVal = await rowVal[j].getAttribute("data-inital-rate");
                if(tenure != null )
                {
                    console.log("Rate for "+tenure+ " is" + rateVal+"\n"); 
                   
                }
            }
            await actions.pause(2000);
            await browser.findElement(webdriver.By.id('deal-five')).click();
            await actions.pause(2000);
            await browser.findElement(webdriver.By.xpath("//th/a/span[@class='triggerText']")).click();
            await actions.pause(2000);
            await browser.findElement(webdriver.By.xpath("//div[@class='applyButton doNotPrint']")).click();
            await actions.pause(2000);
              await browser.navigate().to("https://nationwide.co.uk/products/mortgages/remortgage-to-nationwide/ready-to-apply");          
         //   await browser.switchTo().window("https://nationwide.co.uk/products/mortgages/remortgage-to-nationwide/ready-to-apply");
       
            var newpage = await browser.findElement(webdriver.By.xpath("//h1[@class='blue boldText headingSize02  center ']"));
            var text1 = await newpage.getText();
            await actions.pause(2000);
            if (text1 == "Start your Remortgage application")
                console.log("Mortgage recorded successfully");
            browser.quit();

	}
    
    catch(e)
    {
        webdriverErrorHandler(e, browser)
    }
}
	
