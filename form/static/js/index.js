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



/* 
const getOptionChart3 = async () =>{
    try{
       const response = await fetch("http://127.0.0.1:8000/getcharts3/");
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

 */

document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("menu-icon");
    const navLinks = document.getElementById("nav-links");

    menuIcon.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
});




