import { Dimensions } from 'react-native';

const params = {
    blockSize: 30,
    borderSize: 5,
    fontSize: 15,
    headerRatio: 0.15,
    diffLevel: 0.1,
    getColunasMontadas(){
        const width = Dimensions.get('window').width;
        return Math.floor(width / this.blockSize);
    },

    getLinhasMontadas(){
        const totalAltura = Dimensions.get('window').height;
        const alturaTb    = totalAltura * (1 - this.headerRatio);
        return Math.floor(alturaTb / this.blockSize);
    }
}

export default params;