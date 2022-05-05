import {words} from '/WordBank.js';

export class HangmanHelper {
    
    constructor(cube, exclude) {
        
        this.cube = cube.toUpperCase();

        this.exclude = [];
        for (let i in exclude)
        {
            if (exclude[i].match(/[A-Za-z]/i))
            {
                this.exclude.push(exclude[i].toUpperCase());
            }
            
        }

        this.exclude = [...new Set(this.exclude)];
        


        this.finalLibrary = [];
        
        // this adds all words that have the same length as cube
        for (let i in words())
        {
            if (cube.length == words()[i].length)
            {
                
                this.finalLibrary.push(words()[i]);
            }
        }

        this.alphabetList = [];

        this.main();
        
    }

    // this shortens the list so you only have words that match the positions of the characters
    main() {

        let temp = [];
        
        for (let i in this.cube)
        {

            if (this.cube[i].match(/[A-Z]/i)) // matches the regex to make sure the character is in the alphabet
            {
                for (let j in this.finalLibrary)
                {
                    
                    

                    if (this.finalLibrary[j][i] == this.cube[i])
                    {
                        temp.push(this.finalLibrary[j])
                    }
                }
                

                this.finalLibrary = temp;
                temp = [];

            }

        }


        this.duplicates();
        this.excludeLetters();
        this.telemetry();
        this.frequency();

    }

    duplicates()
    {
        let temp = []
        
        for (let k in this.finalLibrary)
        {
            let unknown = []
            let known = []
            
            for (let i in this.cube)
            {

                if (this.cube[i].match(/[A-Z]/i))
                {
                    known.push(this.finalLibrary[k][i])
                }
                else
                {
                    unknown.push(this.finalLibrary[k][i])
                }

            }


            for (let i in known)
            {
                if (!unknown.includes(known[i]))
                {
                    temp.push(this.finalLibrary[k])
                }
            }
        }

        temp = [...new Set(temp)];
        if (!temp.length == 0)
        {
            this.finalLibrary = temp;
        }

    }

    telemetry()
    {

        let alphabetDictionary = {"A": 0, "B": 0, "C": 0, "D": 0, "E": 0, "F": 0, "G": 0, "H": 0, "I": 0, "J": 0, "K": 0, "L": 0, "M": 0, "N": 0, "O": 0, "P": 0, "Q": 0, "R": 0, "S": 0, "T": 0, "U": 0, "V": 0, "W": 0, "X": 0, "Y": 0, "Z": 0};

        //Counts all the indexes
        for (let i in this.cube)
        {
            if (!this.cube[i].match(/[A-Z]/))
            {
                for (let j in this.finalLibrary)
                {
                    alphabetDictionary[this.finalLibrary[j][i]]++;
                }
            }
        }

        //
        for (let i in alphabetDictionary)
        {
            if (!alphabetDictionary[i] == 0)
            {
                this.alphabetList.push([i, alphabetDictionary[i]]);
            }
            
        }
        
        this.alphabetList = this.alphabetList.sort(function(a, b){return b[1] - a[1]})

    }

    frequency()
    {
        let temp = []
        
        let freq = {"A":  8.497, "B": 1.492, "C": 2.202, "D": 4.253, "E": 11.162, "F": 2.228, "G": 2.015, "H": 6.094, "I": 7.546, "J": 0.153, "K": 1.292, "L": 4.025, "M": 2.406,"N": 6.749, "O": 7.507, "P": 1.929, "Q": 0.095, "R": 7.587, "S": 6.327, "T": 9.356, "U": 2.758, "V": 0.978, "W": 2.560, "X": 0.150, "Y": 1.994, "Z": 0.077}

        let count;
        
        for (let i in this.finalLibrary)
        {
            count = 0;
            
            for (let j in this.finalLibrary[i])
            {
                count += freq[this.finalLibrary[i][j]]
            }
            
            temp.push([this.finalLibrary[i], count])
        }

        temp = temp.sort(function(a, b){return b[1] - a[1]});

        let sorted = []
        for (let i in temp)
        {
            sorted.push(temp[i][0]);
        }

        this.finalLibrary = sorted;
    }

    excludeLetters()
    {
        let temp = []
        
        for (let i in this.finalLibrary)
        {
            let check = true;
            
            for (let j in this.exclude)
            {
                if (this.finalLibrary[i].includes(this.exclude[j]))
                {
                    check = false
                }
            }

            if (check)
            {
                temp.push(this.finalLibrary[i])
            }
        }

        this.finalLibrary = temp;

    }
    
}