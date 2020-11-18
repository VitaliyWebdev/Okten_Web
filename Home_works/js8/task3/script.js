// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).
//
let area = document.getElementById('area');
let arr = getLocalStorageData('info') || [];
let index = 0;
if (getLocalStorageData('info')){
    area.value = getLocalStorageData('info')[getLocalStorageData('info').length-1];
}

function submit(){
    arr.push(area.value);
    index = arr.length-1;
    localStorage.setItem('info',JSON.stringify(arr));


}

function getLocalStorageData(name){
    return JSON.parse(localStorage.getItem(name));
}
function onleftClick() {
    if(!index){
        index = 1;
    }
    area.value = JSON.parse(getLocalStorageData('info')[--index]);
}

function onRightClick(){
    if(index===arr.length-1){
        index = index - 1;
    }
    index = index +1;
    area.value = JSON.parse(getLocalStorageData('info')[index]);

}

