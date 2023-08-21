function Employee(name,age,salary){
    this.name = name
    this.age = age
    this.salary = salary
}
Employee.prototype.showInfos = function(){
    console.log("İsim : " + this.name +", Yaş : " + this.age + ", Maaş : " + this.salary)
}

const emp1 = new Employee("Bedo",22,69000) 
emp1.showInfos()