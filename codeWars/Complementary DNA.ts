// Description:
// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

// dnaStrand []        `shouldBe` []
// dnaStrand [A,T,G,C] `shouldBe` [T,A,C,G]
// dnaStrand [G,T,A,T] `shouldBe` [C,A,T,A]
// dnaStrand [A,A,A,A] `shouldBe` [T,T,T,T]

export class Kata {
    static dnaStrand(dna: string) {
    
    let myArray = dna.split('');
    let result = '';

    for(let i = 0; i < myArray.length; i++){
        if(myArray[i] === 'C'){ myArray[i] = 'G'}
        else if(myArray[i] === 'A'){ myArray[i] = 'T'}
        else if(myArray[i] === 'G'){ myArray[i] = 'C'}
        else if(myArray[i] === 'T'){ myArray[i] = 'A'}
        result += myArray[i];
    };
    return result.toString();
    }}

    //  better solution 

export class Kata {
    static dnaStrand(dna: string): string {
        const match = {
            A: "T",
            T: "A",
            G: "C",
            C: "G",
        };
        return Array.from(dna, (v) => match[v]).join("");
    }
}


