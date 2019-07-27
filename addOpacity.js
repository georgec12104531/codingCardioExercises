function addOpacity(hex: string, opacity: number): string {
		const hexColor = hex.replace('#','');
    const r = parseInt(hexColor.substring(0,2), 16);
    const g = parseInt(hexColor.substring(2,4), 16);
    const b = parseInt(hexColor.substring(4,6), 16);
    
    // alpha is the percentage of opacity
    const result = 'rgba('+r+','+g+','+b+','+opacity/100+')';
    return result;
	}
