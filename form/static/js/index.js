const getOptionChart = async () =>{
 try{
    const response = await fetch("sefader-agronegocios.com/getcharts/");
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