// Interface for class Director
interface DirectorInterface {
    workFromHome(): string;
    //getCoffeeBreak(): string;
    workDirectorTasks(): string;
    getToWork(): string;
};

class Director implements DirectorInterface {

    workFromHome(): string {
        return "Working from home";
    }

    getToWork(): string {
        return "Getting a coffee break";
    }

    workDirectorTasks(): string {
        return "Getting to director tasks";
    }
} 

// Interface for the class Teacher
interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
};

class Teacher implements TeacherInterface {
    
    workFromHome(): string {
        return "Cannot work from home";
    }

    getCoffeeBreak(): string {
        return "Cannot have a break";
    }

    workTeacherTasks(): string {
        return "Getting to work";
    }

};

const createEmployee = (value: string | number): Teacher | Director => {
    let numericValue: number;

    // Check if the value is a string and convert it to a number
    if (typeof value === 'string') {
        numericValue = parseFloat(value); // Convert string to number
    } else {
        numericValue = value; // Use the number directly
    }

    // Return a Teacher if numericValue is less than 500, otherwise return a Director
    if (numericValue < 500) {
        return new Teacher();
    } else {
        return new Director();
    }

};