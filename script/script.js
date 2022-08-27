const controls = document.querySelectorAll('.controle')
let itemAtual =0;
const itens = document.querySelectorAll('.carrossel_item')
const maxItens = itens.length;

controls.forEach(control=>{
	control.addEventListener('click',()=>{
		const left = control.classList.contains('seta_left')
		
		if(left){
			itemAtual-=1;
		}else{
			itemAtual+=1;
		}
		if(itemAtual >=maxItens){
			itemAtual = 0;
		}
		if(itemAtual <0){
			itemAtual= maxItens - 1;
		}
		/* console.log('cliquei na esquerda? ' +left+' ' +itemAtual) */
		itens.forEach(item=>item.classList.remove('item_atual'))
		itens[itemAtual].scrollIntoView({
			 block: "nearest",
			inline:"center",
			behavior:"smooth",
			
		})
		itens[itemAtual].classList.add('item_atual')
	})
})

let iconeSullivan = document.getElementById('item_um')
let iconeMike = document.getElementById('item_dois')
let iconeBoo = document.getElementById('item_tres')
let temas = document.getElementById('temas')
let containerUm = document.getElementById('container_um')
let subtitulo = document.getElementById('subtitulo')
let containerQuatro = document.getElementById('personagens')
let imgContainerQuatro = document.querySelectorAll('.imagem_container_quatro')
let nomePersonagem = document.querySelectorAll('.nome_personagem')
let nomePersonagemUm = nomePersonagem[0]
let nomePersonagemDois = nomePersonagem[1]
let nomePersonagemTres = nomePersonagem[2]


let galeriaFotos = document.querySelector('.galeriaFotos')
let setaLeft = document.querySelector('.seta_left')
let setaRight = document.querySelector('.seta_right')
let footer = document.getElementById('footer_id')

let imgUmContainerQuatro = imgContainerQuatro[0]
let imgDoisContainerQuatro = imgContainerQuatro[1]
let imgTresContainerQuatro = imgContainerQuatro[2]

function removeMike(){
		titulo.classList.remove('mikeH1')
	temas.classList.remove('mikeTemas')
	iconeSullivan.classList.remove('mikeItem')
	iconeBoo.classList.remove('mikeItem')
	iconeMike.classList.remove('mikeItem')
	iconeSullivan.classList.remove('mike_item_um')
	iconeMike.classList.remove('mike_item_dois')
	iconeBoo.classList.remove('mike_item_tres')
	containerUm.classList.remove('mike_container_um')
	subtitulo.classList.remove('mike_mais_personagens')	
	imgUmContainerQuatro.classList.remove('mike_imagem_container_quatro')
	imgUmContainerQuatro.classList.add('imagem_container_quatro')	
	imgDoisContainerQuatro.classList.remove('mike_imagem_container_quatro')	
	imgTresContainerQuatro.classList.remove('mike_imagem_container_quatro')	
	galeriaFotos.classList.remove('mike_galeriaFotos')
	setaLeft.classList.remove('mike_seta_left')
	setaRight.classList.remove('mike_seta_right')
	footer.classList.remove('mike_footer')	
}
function removeBoo(){
	titulo.classList.remove('booH1')
	temas.classList.remove('booTemas')
	iconeSullivan.classList.remove('booItem')
	iconeBoo.classList.remove('booItem')
	iconeMike.classList.remove('booItem')
	iconeSullivan.classList.remove('boo_item_um')
	iconeMike.classList.remove('boo_item_dois')
	iconeBoo.classList.remove('boo_item_tres')
	containerUm.classList.remove('boo_container_um')
	subtitulo.classList.remove('boo_mais_personagens')	
	nomePersonagemUm.classList.remove('boo_nome_persoangem')	
	nomePersonagemDois.classList.remove('boo_nome_persoangem')	
	nomePersonagemTres.classList.remove('boo_nome_persoangem')	
	imgUmContainerQuatro.classList.remove('boo_imagem_container_quatro')	
	imgDoisContainerQuatro.classList.remove('boo_imagem_container_quatro')
	imgTresContainerQuatro.classList.remove('boo_imagem_container_quatro')	
	galeriaFotos.classList.remove('boo_galeriaFotos')
	setaLeft.classList.remove('seta_left_boo')
	setaRight.classList.remove('seta_right_boo')
	footer.classList.remove('boo_footer')	
}

iconeSullivan.addEventListener('click', function(){
	removeMike()
	removeBoo()
	imgUmContainerQuatro.classList.add('imagem_container_quatro')	
	imgDoisContainerQuatro.classList.add('imagem_container_quatro')	
	imgTresContainerQuatro.classList.add('imagem_container_quatro')	
})
	iconeMike.addEventListener('click', function(){
	removeBoo()
	titulo.classList.add('mikeH1')
	temas.classList.add('mikeTemas')
	iconeSullivan.classList.add('mikeItem')
	iconeBoo.classList.add('mikeItem')
	iconeMike.classList.add('mikeItem')
	iconeSullivan.classList.add('mike_item_um')
	iconeMike.classList.add('mike_item_dois')
	iconeBoo.classList.add('mike_item_tres')
	containerUm.classList.add('mike_container_um')
	subtitulo.classList.add('mike_mais_personagens')	
	imgUmContainerQuatro.classList.add('mike_imagem_container_quatro')
	imgUmContainerQuatro.classList.remove('imagem_container_quatro')	
	imgDoisContainerQuatro.classList.add('mike_imagem_container_quatro')
	imgDoisContainerQuatro.classList.remove('imagem_container_quatro')		
	imgTresContainerQuatro.classList.add('mike_imagem_container_quatro')
	imgTresContainerQuatro.classList.remove('imagem_container_quatro')		
	galeriaFotos.classList.add('mike_galeriaFotos')
	setaLeft.classList.add('mike_seta_left')
	setaRight.classList.add('mike_seta_right')
	footer.classList.add('mike_footer')	
})
iconeBoo.addEventListener('click', function(){
	removeMike()
	titulo.classList.add('booH1')
	temas.classList.add('booTemas')
	iconeSullivan.classList.add('booItem')
	iconeBoo.classList.add('booItem')
	iconeMike.classList.add('booItem')
	iconeSullivan.classList.add('boo_item_um')
	iconeMike.classList.add('boo_item_dois')
	iconeBoo.classList.add('boo_item_tres')
	containerUm.classList.add('boo_container_um')
	subtitulo.classList.add('boo_mais_personagens')	
	nomePersonagemUm.classList.add('boo_nome_persoangem')	
	nomePersonagemDois.classList.add('boo_nome_persoangem')	
	nomePersonagemTres.classList.add('boo_nome_persoangem')		
	imgUmContainerQuatro.classList.add('boo_imagem_container_quatro')
	imgUmContainerQuatro.classList.remove('imagem_container_quatro')	
	imgDoisContainerQuatro.classList.add('boo_imagem_container_quatro')	
	imgDoisContainerQuatro.classList.remove('imagem_container_quatro')		
	imgTresContainerQuatro.classList.add('boo_imagem_container_quatro')
	imgTresContainerQuatro.classList.remove('imagem_container_quatro')		
	galeriaFotos.classList.add('boo_galeriaFotos')
	setaLeft.classList.add('seta_left_boo')
	setaRight.classList.add('seta_right_boo')
	footer.classList.add('boo_footer')	
})
