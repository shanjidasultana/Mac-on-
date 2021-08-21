//======== first product function============

function firstButton(product){
    const productPrice= document.getElementById(product+"-cost" );
    const productPriceText= productPrice.innerText;
    productPrice.innerText =  parseFloat(productPriceText) * 0;
    totalCalc();
    return productPrice;
   

}
//============== second and third product function=============

function SecondButton(product,price) {
    const secondProduct=firstButton(product);
    const secondProductText = secondProduct.innerText;
    const secondProductPrice=parseInt(secondProductText) + price;
    secondProduct.innerText=secondProductPrice;
    totalCalc();
    return secondProductPrice;
   
}

//============ Total product============

function productCalc(product){
    const productPrice= document.getElementById(product +"-cost" );
    const productPriceText= parseInt(productPrice.innerText);
    console.log(productPriceText);
     return productPriceText;
}


//================ Total calculation===========


function totalCalc() {
     const bestPrice= productCalc('bestPrice') ;
     const memorycost =productCalc('memory');
     const storagecost =productCalc('storage');
     const deliverycost =productCalc('delivery');
     const totalPrice  =bestPrice + memorycost +  storagecost + deliverycost;
     document.getElementById('total-cost').innerText= totalPrice;
     document.getElementById('total').innerText=totalPrice;

   
}

//=========== Memory Button ==========
     
const memoryBtn1 = document.getElementById('memoryBtn1').addEventListener('click',function(){
  
    firstButton('memory');
})
const memoryBtn2 = document.getElementById('memoryBtn2').addEventListener('click',function(){
    SecondButton('memory', 180);
   
})

//============== Storage Button ============

const storageBtn1 = document.getElementById('storageBtn1').addEventListener('click',function(){
  
    firstButton('storage');
})
const storageBtn2 = document.getElementById('storageBtn2').addEventListener('click',function(){
  
     SecondButton('storage', 100);
    
})
const storageBtn3 = document.getElementById('storageBtn3').addEventListener('click',function(){
  
    SecondButton('storage', 180);
})

//============= Delivery Button ===========

const deliveryBtn1 = document.getElementById('deliveryBtn1').addEventListener('click',function(){
  
    firstButton('delivery');
})
const deliveryBtn2 = document.getElementById('deliveryBtn2').addEventListener('click',function(){
  
   SecondButton('delivery', 20);
    
})
// ============== Input Password Section==============

const applyBtn= document.getElementById('apply-btn').addEventListener('click',function(){
    const input= document.getElementById('input');
    const password= 'stevekaku';
     if(input.value==password){
        
        const total= document.getElementById('total');
        const totalText= parseInt(total.innerText);
        const totalCost= totalText-(totalText * 0.2);
        total.innerText= totalCost;
        
    }
     input.value = '';

})
