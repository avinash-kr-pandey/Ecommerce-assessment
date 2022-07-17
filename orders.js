window.addEventListener('load',orderInit);
function orderInit(){
  let itemsInCard =   localStorage.itemsInCard;
  let orderArray = JSON.parse(itemsInCard);
  printOrder(orderArray);
  
}

function printOrder(orderArray){
    let orders = '';
    orderArray.forEach(element => {
        
        orders += orderHTML(element);
    });
    document.querySelector('#orderTableBody').innerHTML = orders;
}

function orderHTML(obj){
    let total = obj.product.price * obj.noOfItem;
    let containt = `<tr>
                <td><img src="${obj.product.imgSrc}" alt="No img found">${obj.product.name}</td>
                <td>$${obj.product.price}</td>
                <td>${obj.noOfItem}</td>
                <td>$${total}</td>
                <td><button class="btn-link">Buy now</button></td>
            </tr>`
    return containt;
}