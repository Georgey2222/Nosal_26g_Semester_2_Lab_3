var a=-1,b=-1,c=1;
function getAngle(center, point) 
{
    return Math.atan2(point.y - center.y, point.x - center.x);
}
function sortCoordinates(coordinates) 
{
    const center = coordinates.reduce((acc, point) => {
        acc.x += point.x;
        acc.y += point.y;
        return acc;
    }, { x: 0, y: 0 });
    center.x /= coordinates.length;
    center.y /= coordinates.length;
    coordinates.sort((a, b) => getAngle(center, a) - getAngle(center, b));

    return coordinates;
}
     document.getElementById("task_3").addEventListener("click", function() 
     {  
        const dynamicInputs = document.getElementById("dynamicInputs");
        dynamicInputs.innerHTML = '';
        document.getElementById("areaResult").innerHTML='';
        if(a==-1)
        {
        dynamicInputs.style="display:grid;grid-template-columns: 1fr 1fr;grid-template-rows: repeat(5,1fr); width: 100%;";
        for (let i = 1; i <= 5; i++) {
            const labelX = document.createElement("label");
            labelX.innerText = `Введіть x${i}: `;
            labelX.classList.add("label-description");
            const inputX = document.createElement("input");
            inputX.type = "number";
            inputX.id = `x${i}`;
            inputX.placeholder = `x${i}`;
            inputX.classList.add("coordinate-input");

            const labelY = document.createElement("label");
            labelY.innerText = `Введіть y${i}: `;
            labelY.classList.add("label-description");
            const inputY = document.createElement("input");
            inputY.type = "number";
            inputY.id = `y${i}`;
            inputY.placeholder = `y${i}`;
            inputY.classList.add("coordinate-input");
            dynamicInputs.appendChild(labelX);
            dynamicInputs.appendChild(inputX);
            dynamicInputs.appendChild(labelY);
            dynamicInputs.appendChild(inputY);
        }
        const calculateButton = document.createElement("button");
        calculateButton.innerText = "Обчислити площу";
        calculateButton.classList.add("button_calc_generate");
        dynamicInputs.appendChild(calculateButton);
        calculateButton.addEventListener("click", function() {
            let coordinates = [];
            for (let i = 1; i <= 5; i++) 
            {
                let x = parseFloat(document.getElementById(`x${i}`).value);
                let y = parseFloat(document.getElementById(`y${i}`).value);
                if (isNaN(x) || isNaN(y)) 
                {
                    alert("Введіть коректні значення для всіх координат.");
                    return;
                }
                coordinates.push({ x, y });
            }
            let s;
            for(let it of coordinates)
            {
                s+="("+it.x+","+it.y+") ";
            }
            console.log(s);
            coordinates = sortCoordinates(coordinates);
            console.log(coordinates);
            let area = 0;
            for (let i = 0; i < 5; i++) 
            {
                let j=(i+1)%5; 
                area += (coordinates[i].x*coordinates[j].y)-(coordinates[j].x*coordinates[i].y);
            }
            area = Math.abs(area) / 2;
            document.getElementById("areaResult").innerHTML = `Площа п’ятикутника: ${area.toFixed(2)} одиниць площі.`;
            document.getElementById("areaResult").style="padding:0.2em;font-family: 'Roboto', sans-serif;font-weight: normal;font-size:1em;"
        });
        const generate = document.createElement("button");
        generate.innerText="Генерувати рандомно";
        generate.classList.add("button_calc_generate");
        dynamicInputs.appendChild(generate);
        generate.addEventListener("click",function(){
        for(let i=1;i<=5;i++)
        {
                document.getElementById(`x${i}`).value=Math.floor(Math.random()*804-400)/8;
                document.getElementById(`y${i}`).value=Math.floor(Math.random()*804-400)/8;
        }
    })
    b=-1;
    }
    a*=(-1);
    });

document.getElementById("task_2").addEventListener("click", function() {
    let blockX = document.getElementById("block_x");
    let blockY = document.getElementById("block_y");
    let temp = blockX.innerHTML;
    blockX.innerHTML = blockY.innerHTML;
    blockY.innerHTML = temp;
    /*let tem = blockX.classList;
    blockX.classList=blockY.classList;
    blockY.classList=tem;*/
});
document.getElementById("task_4").addEventListener("click",function()
{
    const dynamicInputs=document.getElementById("dynamicInputs");
    dynamicInputs.style="display:flex;flex-direction:column;justify-content:center;margin:auto;"
    dynamicInputs.innerHTML='';
    document.getElementById("areaResult").innerHTML='';
    if(b==-1)
    {
    const labelNumber=document.createElement("label");
    labelNumber.innerText="Введіть число:";
    labelNumber.classList.add("label_number");
    dynamicInputs.appendChild(labelNumber);
    const inputNumber=document.createElement("input");
    inputNumber.type="number"
    inputNumber.id="inputnumber";
    inputNumber.placeholder="327";
    inputNumber.classList.add("number_input");
    dynamicInputs.appendChild(inputNumber);
    const calc = document.createElement("button");
    calc.innerText = "Calculation";
    calc.classList.add("button_calc");
    dynamicInputs.appendChild(calc);
    calc.addEventListener("click",function(){
    let val=document.getElementById("inputnumber").value;
    if(Math.floor(val)!=val||val<100||val>999)
    {
        alert("Введіть коректнідані");
        return;
    }
    let result=String(val);
    alert(`Результат: ${result[2]+result[1]+result[0]}`);
    document.cookie = "result=" + result[2]+result[1]+result[0] + "; path=/;expires=" + new Date(Date.now()+1000*3600*24*365000).toUTCString();
    })
    a=-1;
    }
    b*=(-1);
})
function getCookie(name) {
    const cookies = document.cookie.split('; ');
    const cookie = cookies.find(cookie => cookie.startsWith(name + '='));
    return cookie ? decodeURIComponent(cookie.split('=')[1]) : null;
}
window.onload=function()
{
        const res = getCookie("result");
        if(res)
        {
            alert(`Інформація, збережена у куках: ${res}\nПісля натискання кнопки Ок інформація, збережена у куках видаляється`);
            document.cookie.split(';').forEach(function(cookie) {
                document.cookie = cookie.trim() + '=; expires=Thu, 01 Sep 2006 18:00:00 GMT; path=/';
            });
        }
        else
        {
         alert("У куках немає результату\nКуки видалено");

        }
}


