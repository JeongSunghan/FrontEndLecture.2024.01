package paperplease;

public class Ending {

	
	int getEnding(int criminal,int infected,int score){
		int tell;
		if(criminal >= infected) {
			// 통과시킨 범죄자 수와 감염자 수가 같거나 범죄자 수가 높다면
			tell = 0;
		}else {
			tell = 1;
		}
		
		String endingLogo =
				"□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□\n"+
				"□□□□□□□□■■■■■□□■□□□□□■□■■■□□□□□■■■□□□■□□□□□□■□□□□□■■□□□□□□□□□□□□\n"+
				"□□□□□□□□■□□□□□□■■□□□□■□■□□□■□□□□■□□□□■■□□□□□■□□□■□□□□■□□□□□□□□□□\n"+
				"□□□□□□□□■□□□□□□■□■□□□■□■□□□□■□□□■□□□□■□□■□□□■□□■□□□□□□■□□□□□□□□□\n"+
				"□□□□□□□□■■■■■□□■□□■□□■□■□□□□■□□□■□□□□■□□□■□□■□□■□□□□□■■■□□□□□□□□\n"+
				"□□□□□□□□■□□□□□□■□□□■□■□■□□□□■□□□■□□□□■□□□□■□■□□■□□□□□□■□□□□□□□□□\n"+
				"□□□□□□□□■□□□□□□■□□□□■■□■□□□■□□□□■□□□□■□□□□□■■□□□■□□□■□■□□□□□□□□□\n"+
				"□□□□□□□□■■■■■□□■□□□□□■□□■■■□□□□■■■□□□■□□□□□□■□□□□□■■□□■□□□□□□□□□\n"+
				"□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□\n\n";

		System.out.println(endingLogo);
		
		if(tell == 0 && criminal >= 2) {
			// 통과시킨 범죄자 수가 감염자 수 보다 같거나 많고, 입국시킨 범죄자가 2명 이상일때 
			ending2();
			return 2;
		}else if(tell == 1 && infected >= 2) {
			// 통과시킨 감염자 수가 범죄자 수 보다 많고, 입국시킨 감염자가 2명 이상일때 
			ending3();
			return 3;
		}else if(score < 80) {
			// 점수가 80점 미달일 때
			ending1();
			return 1;
		}else {
			// 점수가 80점 이상일 때
			ending4();
			return 4;
		}
	}
	
	
//	엔딩 
	// 엔딩 1번 - 거북이 : 점수 80 미달
	void ending1() {
		String ending = 
				"----------------------------------------------------------------\n"+
				"			    =============      					\n"+
				"		      	        거북이      		         		\n"+
				"			    =============      					\n"+
				"																\n"+												
				"    국가는 평화롭지만 인사평가 점수가 80점 미만으로 당신은 해고되었습니다..  		\n"+
				"          													   	\n"+
				"----------------------------------------------------------------\n";
	
		System.out.println(ending);
	}
	
	// 엔딩 2번 - 흐린눈 : 범죄자 점수 20점 이상
	void ending2() {
		String ending = 
				"----------------------------------------------------------------\n"+
				"			    =============      					\n"+
				"		      	        흐린눈      						\n"+
				"			    =============      					\n"+
				"																\n"+												
				"      		         너무 많은 범죄자가 입국했습니다. 					\n"+
				"      		         범죄율이 높아져 국가가 멸망했습니다..  				\n"+
				"          													   	\n"+
				"----------------------------------------------------------------\n";
			
		System.out.println(ending);
		}
	
	// 엔딩 3번 - 침식된 도시 : 감염자 점수 20점 이상
	void ending3() {
		String ending = 
				"----------------------------------------------------------------\n"+
				"			    =============      						\n"+
				"		      	        침식된도시      							\n"+
				"			    =============      						\n"+
				"																	\n"+												
				" 		          너무 많은 바이러스 감염자가 입국했습니다. \n"+
				" 		          국가에 전염병이 돌아 국가가 멸망했습니다.. \n"+
				"          													   		\n"+
				"----------------------------------------------------------------\n";
			
		System.out.println(ending);
		}

	// 엔딩 4번 - 해피엔딩 : 점수 80 이상 / 범죄자 감염자 점수 각각 20점 미달
	void ending4() {
		
		String ending = 
				"----------------------------------------------------------------\n"+
				"			    =============      					\n"+
				"		      	        평화로운 도시      						\n"+
				"			    =============      					\n"+
				"																\n"+												
				"                 당신의 훌륭한 일처리로 인해 국가는 평화롭습니다!!	 		\n"+
				"         	      당신의 입국관리원 직책은 유지됩니다!!	 				\n"+
				"          													   	\n"+
				"----------------------------------------------------------------\n";
		
		System.out.println(ending);
		}
	
	
	// 엔딩 목록 설명
	void endingList(int[] userEndings) {
		
		String endNon  = " 해금되지 않은 엔딩                 ";
		String ending1 = " 거북이     : score 80점 미만      ";
		String ending2 = " 흐린눈     : 범죄자를 2명이상 통과시킴 ";
		String ending3 = " 침식된 도시 : 감염자를 2명이상 통과시킴 ";
		String ending4 = " 해피엔딩    : score 80점 이상     ";
		
		String[] userEnd = new String[4] ;
		
		for(int i = 0 ; i < 4 ; i++ ) {
			userEnd[i] = endNon;
		}
		
		if(userEndings[0] == 1) {
			userEnd[0] = ending1;
		}
		if(userEndings[1] == 1) {
			userEnd[1] = ending2;
		}
		if(userEndings[2] == 1) {
			userEnd[2] = ending3;
		}
		if(userEndings[3] == 1) {
			userEnd[3] = ending4;
		}

		String page =  
				"        -------------------------< Ending >-------------------------\n"+
				"        |                                                          |\n"+ 
				"        |                                                          |\n"+ 
				"        |                                                          |\n"+ 
				"        |              1."+userEnd[0]+"           |\n"+ 
				"        |              2."+userEnd[1]+"           |\n"+ 
				"        |              3."+userEnd[2]+"           |\n"+ 
				"        |              4."+userEnd[3]+"           |\n"+ 
				"        |                                                          |\n"+ 
				"        |                                                          |\n"+ 
				"        |                                                          |\n"+ 
				"        ------------------------------------------------------------\n";
		
		System.out.println(page);
			
	}
	
	
	
	
}
