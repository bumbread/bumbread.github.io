let a=['0','1','2','3','4','5','6','7','8','9'];let b=['a','b','c','d','e','f','g','h','i','g','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','G','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];let c=['+','~','$','<','(',')','-','|','@','>','[',']','*','&','!',',','{','}','/','?','.',';','%',':','\\'];let d=[' ','\n','\t','\r'];function e(a,b){if(b==2)return a=='0'||a=='1';if(b==8)return a=='0'||a=='1'||a=='2'||a=='3'||a=='4'||a=='5'||a=='6'||a=='7';if(b==10)return a=='0'||a=='1'||a=='2'||a=='3'||a=='4'||a=='5'||a=='6'||a=='7'||a=='8'||a=='9';if(b==16)return a=='0'||a=='1'||a=='2'||a=='3'||a=='4'||a=='5'||a=='6'||a=='7'||a=='8'||a=='9'||a=='a'||a=='b'||a=='c'||a=='d'||a=='e'||a=='f'||a=='A'||a=='B'||a=='C'||a=='D'||a=='E'||a=='F';return false;}ebnf_keywords=["except"];function f(d){let f='';for(let g=0;g<d.length;)if(a.includes(d[g])){f+='<span class=token-num>';let h=10;if(d[g]=='0'){f+=d[g++];if(g<d.length){if(d[g]=='b'||d[g]=='B')h=2;else if(d[g]=='o'||d[g]=='O')h=8;else if(d[g]=='d'||d[g]=='D')h=10;else if(d[g]=='x'||d[g]=='X')h=16;f+=d[g++];}}while(g<d.length&&(e(d[g],h)||d[g]=='_'))f+=d[g++];if(g<d.length&&d[g]=='.'){f+=d[g++];while(g<d.length&&(e(d[g],h)||d[g]=='_'))f+=d[g++];if(g<d.length&&(d[g]=='e'||d[g]=='E'||d[g]=='p'||d[g]=='P')){f+=d[g++];if(g<d.length&&(d[g]=='+'||d[g]=='-'))f+=d[g++];while(g<d.length&&(e(d[g],h)||d[g]=='_'))f+=d[g++];}}f+='</span>';}else if(c.includes(d[g])){let i=d[g];if(d[g]=='&'){let j='&';do{g+=1;j+=d[g];}while(g<d.length&&d[g]!=';');i=j;}g+=1;f+='<span class=token-operator>';f+=i;f+='</span>';}else if(b.includes(d[g])||d[g]=='_'){let k='';while(g<d.length&&(b.includes(d[g])||a.includes(d[g])||d[g]=='_'||d[g]=='-'))k+=d[g++];if(ebnf_keywords.includes(k)){f+='<span class=token-keyword>';f+=k;f+='</span>';}else{f+='<span class=token-identifier>';f+=k;f+='</span>';}}else if(d[g]=='"'){f+='<span class=token-string>';f+=d[g++];while(g<d.length&&d[g]!='"')if(d[g]=='\\'){f+=d[g++];if(g<d.length)if(d[g]=='u'){f+=d[g++];for(let l=0;l<6;l+=1)while(g<d.length&&e(d[g],16))f+=d[g++];}else f+=d[g++];}else f+=d[g++];f+=d[g++];f+='</span>';}else if(d[g]=='\''){f+='<span class=token-char>';f+=d[g++];while(g<d.length&&d[g]!='\'')if(d[g]=='\\'){f+=d[g++];if(g<d.length)if(d[g]=='u'){f+=d[g++];for(let l=0;l<6;l+=1)while(g<d.length&&e(d[g],16))f+=d[g++];}else f+=d[g++];}else f+=d[g++];f+=d[g++];f+='</span>';}else f+=d[g++];return f;}let g=["bool","char","int","byte","float","ptr","and","or","xor","iff","implies","not","sizeof","typeof","offsetof","if","else","while","do","repeat","until","try","catch","let","type","func","meth","this","operator","struct","enum","union","print","assert","break","continue","return","throw","import","namespace"];function h(d){let f='';for(let h=0;h<d.length;)if(a.includes(d[h])){f+='<span class=token-num>';let i=10;if(d[h]=='0'){f+=d[h++];if(h<d.length){if(d[h]=='b'||d[h]=='B')i=2;else if(d[h]=='o'||d[h]=='O')i=8;else if(d[h]=='d'||d[h]=='D')i=10;else if(d[h]=='x'||d[h]=='X')i=16;f+=d[h++];}}while(h<d.length&&(e(d[h],i)||d[h]=='_'))f+=d[h++];if(h<d.length&&d[h]=='.'){f+=d[h++];while(h<d.length&&(e(d[h],i)||d[h]=='_'))f+=d[h++];if(h<d.length&&(d[h]=='e'||d[h]=='E'||d[h]=='p'||d[h]=='P')){f+=d[h++];if(h<d.length&&(d[h]=='+'||d[h]=='-'))f+=d[h++];while(h<d.length&&(e(d[h],i)||d[h]=='_'))f+=d[h++];}}f+='</span>';}else if(d[h]=='#'){f+='<span class=token-comment>';f+=d[h++];if(h<d.length&&d[h]=='#'){f+="#";h+=1;while(h<d.length){let j=d[h];if(j=='#'&&h+1<d.length&&d[h+1]=='#'){f+="##";h+=2;break;}else{f+=j;h+=1;}}}else if(h<d.length&&d[h]=='*'){f+="*";let k=1;h+=1;while(h<d.length){let j=d[h];if(j=='#'&&h+1<d.length&&d[h+1]=='*'){f+="#*";h+=2;k+=1;}else if(j=='*'&&h+1<d.length&&d[h+1]=='#'){f+="*#";h+=2;if(k==1)break;k-=1;}else{f+=j;h+=1;}}}else{while(h<d.length&&d[h]!='\n')f+=d[h++];;}f+='</span>';}else if(c.includes(d[h])){let l=d[h];if(d[h]=='&'){let m='&';do{h+=1;m+=d[h];}while(h<d.length&&d[h]!=';');l=m;}h+=1;f+='<span class=token-operator>';f+=l;f+='</span>';}else if(b.includes(d[h])||d[h]=='_'){let n='';while(h<d.length&&(b.includes(d[h])||a.includes(d[h])||d[h]=='_'))n+=d[h++];if(g.includes(n)){f+='<span class=token-keyword>';f+=n;f+='</span>';}else{f+='<span class=token-identifier>';f+=n;f+='</span>';}}else if(d[h]=='"'){f+='<span class=token-string>';f+=d[h++];while(h<d.length&&d[h]!='"')if(d[h]=='\\'){f+=d[h++];if(h<d.length)if(d[h]=='u'){f+=d[h++];for(let o=0;o<6;o+=1)while(h<d.length&&e(d[h],16))f+=d[h++];}else f+=d[h++];}else f+=d[h++];f+=d[h++];f+='</span>';}else if(d[h]=='\''){f+='<span class=token-string>';f+=d[h++];while(h<d.length&&d[h]!='\'')if(d[h]=='\\'){f+=d[h++];if(h<d.length)if(d[h]=='u'){f+=d[h++];for(let o=0;o<6;o+=1)while(h<d.length&&e(d[h],16))f+=d[h++];}else f+=d[h++];}else f+=d[h++];f+=d[h++];f+='</span>';}else f+=d[h++];return f;}function i(a,b){switch(b){case 'language-ebnf':return f(a);break;case 'language-x':return h(a);default:return a;}}let j=document.getElementsByTagName('code');for(let k=0;k!=j.length;k+=1){let l=j[k].innerHTML;let m=j[k].className.split(' ')[1];j[k].innerHTML=i(l,m);}