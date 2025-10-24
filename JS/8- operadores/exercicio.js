function  comparador (A, B){
    let compara= A == B? console.log("eles são iguais kk"): console.log('eles são diferentes krl')
    let verificaSoma = A + B >= 10? console.log(`krl meno eles juntos dão mais que 10 hue hue eles dão ${A+B}`): console.log(`ta ficando doido porra? isso é menos que 10 isso da ${A+B}`)
    if(A+B < 10){
         console.log(`ta dando menor que 10 e menor que 20`)
    }
    else if(A+B == 10){
            console.log("oloco mano a conta deu 10")
    }
    else if(A + B > 10 && A+B < 20) {
        console.log("incrivel cara ta dando exatamente mais que 10 e menor que 20")
    }
    else if(A + B == 'atumalaca'){
        console.log("https://youtube.com/shorts/y0tiuPISDCY?si=YPWXWxTfTUKRv9iP")
        window.location.href ="https://youtube.com/shorts/y0tiuPISDCY?si=YPWXWxTfTUKRv9iP"
    }
    else{
        console.log("mano só pode ser mais ou igual que 20 ne mano")
    }
}
