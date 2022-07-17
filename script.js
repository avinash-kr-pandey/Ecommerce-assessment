window.addEventListener('load',init);
function init(){
  let productsString =  localStorage.products;
  let productArray = JSON.parse(productsString);
  printProduct(productArray);
}
function showModel(id){
  let productsString =  localStorage.products;
  let productArray = JSON.parse(productsString);
  let obj = productArray.filter(ele=>ele.id==id)[0];

  var containt = `
    <div class="col productGrid">
      <div class="card shadow-sm">
        <img src="${obj.imgSrc}" alt="No img found">
        <div class="card-body">
          <p class="card-text">
            <h5>Name : ${obj.name}</h5>
            Description : ${obj.description}
            <h6>Price :$${obj.price}</h6>
          </p>
        </div>
      </div>
    </div>`
  document.querySelector('#addToCardContint').innerHTML = containt;
  document.querySelector('#addToCartAction').innerHTML = `<div class="row">
          <div class="col"><h3>No of product</h3></div>
          <div class="col"><input id="noOfItem" type="number" class="form-control"></div>
        </div>
        <button onclick="addToCart(${id});" type="button" class="btn btn-primary">Add to Card</button>`
  
  document.querySelector('#addToCardModel').click();
}

function printProduct(productArray){
  let finalHtml = '';
  productArray.forEach(product=>{
    finalHtml += makeHtml(product);
  });
  document.querySelector('#productContainer').innerHTML=finalHtml;
}

function addToCart(id){
  let productsString =  localStorage.products;
  let productArray = JSON.parse(productsString);
  let obj = productArray.filter(ele=>ele.id==id)[0];
  let noOfItem = document.querySelector('#noOfItem').value;
  let item = {id : id, noOfItem : noOfItem, product : obj};
  let itemsInCard = JSON.parse(localStorage.itemsInCard);
  let flag = false;
  itemsInCard.forEach(element=>{
    if(element.id==id){
      flag = true;
    }
  });
  if(flag){
    console.log('Already exist...');
  }else{
    itemsInCard.push(item);
  }
  localStorage.itemsInCard = JSON.stringify(itemsInCard);

  

  // localStorage.itemsInCard.forEach(item=>{
  //   item.noOfItem 
  // });
}

function makeHtml(product){
  var containt = `
    <div class="col productGrid">
      <div class="card shadow-sm">
        <img onclick="showModel(${product.id});" src="${product.imgSrc}" alt="No img found">
        <div class="card-body">
          <p class="card-text">
            <h5>Name : ${product.name}</h5>
            Description : ${product.description}
            <h6>Price :$${product.price}</h6>
          </p>
        </div>
      </div>
    </div>`
  return containt;
}
