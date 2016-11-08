'use strict';

const filter=(num)=>{
	if(num>99){
		return '99+';
	}
    return num;
}

export default filter;