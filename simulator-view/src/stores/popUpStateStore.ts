import { defineStore } from 'pinia'

export const usePopUpStateStore = defineStore({
    id:'popUpStateSTore',
    state: () => ({
        popUpState: false,
        popUpValue: 0 as number,
        valueName:"",
        maxValue:100,
        minValue:1,
        coordValue: [] as number[]
    }),
    getters: {
        getPopUpValue: (state) =>{ return state.popUpValue},
        getPopUpState: (state) =>{return state.popUpState},
        getValueName:(state) => {return state.valueName},
        getMaxValue: (state) => {return state.maxValue},
        getMinValue: (state)=>{return state.minValue},
        getCoordValue: (state)=>{return state.coordValue}
    },
    actions:{
        openPopUp(){
            this.popUpState = true
        },
        closePopUp(){
            this.popUpState = false
        },
        updatePopUpValue(value:number){
            this.popUpValue = value
        },
        setValueName(valueName:string){
            this.valueName = valueName
        },
        setMaxValue(value:number){
            this.maxValue = value
        },
        setMinValue(value:number){
            this.minValue = value
        },
        setCoord(coord:number[]){
            this.coordValue = coord
        }
    }
})