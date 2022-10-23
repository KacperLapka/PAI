function dziel(a,b){
    a = Number(a)
    b = Number(b)
    if(!isNaN(a)){
        if(!isNaN(b) || b != 0){
            return Number(a/b)
        }else{
            return "B jest niepoprawne"
        }
    }else{
        return "A jest niepoprawne"
    }
}