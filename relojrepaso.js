(function(){

	var actualizahora=function(){
		var fecha=new Date(),
			horas=fecha.getHours(),
			minutos=fecha.getMinutes(),
			segundos=fecha.getSeconds(),
			dia=fecha.getDate(),
			mes=fecha.getMonth(),
			year=fecha.getFullYear();

		var pHoras=document.getElementById('horas'),
			pMin=document.getElementById('min'),
			pSeg=document.getElementById('segundos'),
			pDia=document.getElementById('dia'),
			pMes=document.getElementById('mes'),
			pYear=document.getElementById('year');


		pDia.textContent=dia;
		pMes.textContent=mes;
		pYear.textContent=year;
		pHoras.textContent=horas;
		if(minutos<10){minutos="0"+minutos};
		pMin.textContent=minutos;
		if(segundos<10){segundos="0"+segundos};
		pSeg.textContent=segundos;

	};
	actualizahora();
	var interval=setInterval(actualizahora,1000);

}())

