
class Imovel {
	  constructor(codigo,venda, aluguel,titulo,subtitulo,area,terreno,quartos,suites,banheiros,vagas,portFechada,armarios,climatizada,piscina,churrasqueira,areaGourmet,energiaFoto,poco,aqSolar,resAgua) {  // Constructor
		  this.codigo=codigo;
		  this.venda=venda;//preco venda
		  this.aluguel=aluguel;//valor aluguel
		  this.titulo=titulo;
		  this.subtitulo=subtitulo;
		  this.area=area;
		  this.terreno=terreno;
		  this.quartos=quartos;
		  this.suites=suites;
		  this.banheiros=banheiros;
		  this.vagas=vagas;
		  this.portFechada = portFechada;
		  this.armarios=armarios;
		  this.climatizada = climatizada;
		  this.piscina=piscina;
		  this.churrasqueira=churrasqueira;
		  this.areaGourmet=areaGourmet;
		  this.energiaFoto=energiaFoto;
		  this.poco=poco;
		  this.aqSolar=aqSolar;
		  this.resAgua=resAgua;
		  this.show=true;
	  }	  
	  
	  fmtVenda(){
			return this.venda.toLocaleString('pt-br', {minimumFractionDigits: 0});	
		}
			
	  detalhes(){
		  
		 var txt = "";
		 if(this.portFechada)txt+='<i class="fa fa-plus"></i> porteira fechada ';
		 if(this.armarios)txt+='<i class="fa fa-plus"></i> armários ';
		 if(this.climatizada)txt+='<i class="fa fa-plus"></i> climatizada ';
		 if(this.piscina)txt+='<i class="fa fa-plus"></i> piscina ';		  
		 if(this.churrasqueira)txt+='<i class="fa fa-plus"></i> churrasqueira ';		  
		 if(this.areaGourmet)txt+='<i class="fa fa-plus"></i> área gourmet ';
		 if(this.energiaFoto)txt+='<i class="fa fa-plus"></i> energia fotovoltáica ';
		 if(this.poco)txt+='<i class="fa fa-plus"></i> poço artesiano ';
		 if(this.aqSolar)txt+='<i class="fa fa-plus"></i> aquecimento solar ';
		 if(this.resAgua)txt+='<i class="fa fa-plus"></i> reserv. água chuva ';
		 //if(this.)txt+='<i class="fa fa-plus"></i> poço artesiano'		  
		  return txt;		  
	  }
	  
	  showVenda(){		
		  if(this.venda==0){
			  return "hidden";
		  }
		  return "";
	  }
	  
	  showAluguel(){
		  if(this.aluguel==0){
			  return "hidden";
		  }
		  return "";
	  }
	  
	  
	  m2Venda(){		
		if(this.venda>0 && this.area>0){
			return  (this.venda/this.area);				  
		}
		return 0;
	   }
	  
	  m2Aluguel(){		
		if(this.aluguel>0 && this.area>0){
			return  (this.aluguel/this.area);				  
		}
		return 0;
	   }
	   
	  m2VendaTxt(){		
		if(this.m2Venda()>0){						
			return this.m2Venda().toLocaleString('pt-br', {maximumFractionDigits: 0}) + "/m²";  
		}
		
		return "";		
	  }
	  
	  m2AluguelTxt(){		
		if(this.m2Aluguel()){						
			return this.m2Aluguel().toLocaleString('pt-br', {maximumFractionDigits: 0}) + "/m²";  
		}		
		return "";		
	  }
	}

function fmt(venda){
	return venda.toLocaleString('pt-br', {minimumFractionDigits: 0});	
}



const imoveis = [

	new Imovel("BL001",3800000,0,"Casa Duplex","Mobiliada",445,580,4,4,5,9,false,true,true,true,true,true,true,true,true,false),
new Imovel("BL002",4900000,0,"Casa Duplex","Mobiliada",482,892,4,3,6,10,false,true,true,true,true,true,true,false,true,false),
new Imovel("BL003",2200000,0,"Casa Linear","Mobiliada",230,448,3,3,3,4,false,true,false,true,true,true,true,false,true,false),
new Imovel("BL004",2450000,0,"Casa Duplex","Porteira Fechada",345,560,4,4,5,4,true,false,false,true,true,true,true,false,true,false),
new Imovel("BL005",2700000,0,"Casa Duplex","Nova",333,448,5,3,5,4,false,false,false,true,true,true,false,false,false,false),
new Imovel("BL006",3200000,0,"Casa Duplex","Nova",351,560,4,4,5,4,false,false,false,true,true,true,false,false,true,false)
	
	
	];
