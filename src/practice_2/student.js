
function Student(Class){
    Person.apply(this,arguments);
    this.class = Class;
    this.introduce = function(){
        return("I am a Student. I am at Class"+this.Class+".");
    }
}