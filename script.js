    let controler = document.querySelectorAll('#controler');
	let product = document.getElementsByClassName('test-card')
	let product_page = Math.ceil(product.length/3);
	let l = 0;
	let movePer = 105.34;
	let maxMove = 240;

    // Laptop_view
    let lap_view = window.matchMedia("(max-width:1200px)")
    if (lap_view.matches){
         movePer = 107.96;
         maxMove = 255;
    }
    // Laptop_view
    let tablet_view = window.matchMedia("(max-width:992px)")
    if (tablet_view.matches){
         movePer = 106.90;
         maxMove = 350;
    }
	// mobile_view	
	let mob_view = window.matchMedia("(max-width: 768px)");
	if (mob_view.matches)
	 {
	 	movePer = 104.50;
	 	maxMove = 504;
	 }
	 let smmob_view = window.matchMedia("(max-width:408px)");
	 if(smmob_view.matches){
		movePer= 105.90;
		maxMove= 504;
	 }

	let right_mover = ()=>{
		l = l + movePer;
		if (product == 1){l = 0; }
		for(const i of product)
		{
			if (l > maxMove){l = l - movePer;}
			i.style.left = '-' + l + '%';
		}

	}
	let left_mover = ()=>{
		l = l - movePer;
		if (l<=0){l = 0;}
		for(const i of product){
			if (product_page>0){
				i.style.left = '-' + l + '%';
			}
		}
	}
	controler[1].onclick = ()=>{right_mover();}
	controler[0].onclick = ()=>{left_mover();}
	controler[3].onclick = ()=>{right_mover();}
	controler[2].onclick = ()=>{left_mover();}