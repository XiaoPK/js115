function Person(name,age){
    this.name = name;
    this.age = age;
    this.introduce = function(name,age){
        return ("My name is "+this.name+". I am "+this.age+" years old.");
    }
}