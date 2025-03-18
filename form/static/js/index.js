const getOptionChart = async () =>{
 try{
    const response = await fetch("https://sefader-agronegocios.com/getcharts/");
    return await response.json();
 } catch (ex) {
    alert(ex);
 }
};

const initChart = async()=>{
    const myChart =echarts.init(document.getElementById("chart"));
    myChart.setOption(await getOptionChart());
    myChart.resize();
};

window.addEventListener("load", async()=>{
    await initChart();

});



const getOptionChart2 = async () =>{
    try{
       const response = await fetch("https://sefader-agronegocios.com/getcharts2/");
       return await response.json();
    } catch (ex) {
       alert(ex);
    }
};


const initChart2 = async()=>{
    const myChart =echarts.init(document.getElementById("chart2"));
    myChart.setOption(await getOptionChart2());
    myChart.resize();
};

window.addEventListener("load", async()=>{
    await initChart2();

});
 



const getOptionChart3 = async () =>{
    try{
       const response = await fetch("https://sefader-agronegocios.com/getcharts3/");
       return await response.json();
    } catch (ex) {
       alert(ex);
    }
};


const initChart3 = async()=>{
    const myChart =echarts.init(document.getElementById("chart3"));
    myChart.setOption(await getOptionChart3());
    myChart.resize();
};

window.addEventListener("load", async()=>{
    await initChart3();

});
 

const getOptionChart4 = async () =>{
    try{
       const response = await fetch("https://sefader-agronegocios.com/getcharts4/");
       return await response.json();
    } catch (ex) {
       alert(ex);
    }
};


const initChart4 = async()=>{
    const myChart =echarts.init(document.getElementById("chart4"));
    myChart.setOption(await getOptionChart4());
    myChart.resize();
};

window.addEventListener("load", async()=>{
    await initChart4();

});




 

const getOptionChart5 = async () =>{
    try{
       const response = await fetch("https://sefader-agronegocios.com/getcharts5/");
       return await response.json();
    } catch (ex) {
       alert(ex);
    }
};


const initChart5 = async()=>{
    const myChart =echarts.init(document.getElementById("chart5"));
    myChart.setOption(await getOptionChart5());
    myChart.resize();
};

window.addEventListener("load", async()=>{
    await initChart5();

});  
  
//Primera grafica 2023
const getOptionChart6 = async () =>{
    try{
       const response = await fetch("https://sefader-agronegocios.com/get_chart_2023_1/");
       return await response.json();
    } catch (ex) {
       alert(ex);
    }
};


const initChart6 = async()=>{
    const myChart =echarts.init(document.getElementById("chart6"));
    myChart.setOption(await getOptionChart6());
    myChart.resize();
};

window.addEventListener("load", async()=>{
    await initChart6();

});  

document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("menu-icon");
    const navLinks = document.getElementById("nav-links");

    menuIcon.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
}); 


 

