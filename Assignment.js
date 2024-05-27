/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let myNFTs=[];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (Name,bodyType,Weight,skinColor,Bling) {
    let myNFT={
        "name":Name,
        "bodytype":bodyType,
        "weight":Weight,
        "skincolor":skinColor,
        "bling":Bling
    }
    myNFTs.push(myNFT);
    console.log("Minted NFT : "+ Name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i=0;i<myNFTs.length;i++){
        console.log("\nNFT ID : "+(i+1));
        console.log("Name : "+ myNFTs[i].name);
        console.log("bodytype : "+ myNFTs[i].bodytype);
        console.log("weight : "+ myNFTs[i].weight);
        console.log("skincolor : "+ myNFTs[i].skincolor);
        console.log("bling : "+ myNFTs[i].bling);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nTotal NFTS : " + myNFTs.length);
}

// call your functions below this line
mintNFT("Jeet","thin",52,"white","Gold Coin");
mintNFT("Yashu","thin",49,"grey","Silver Coin");
mintNFT("Prateek","thick",76,"mixed","Gold Coin");
mintNFT("Sahil","thin",48,"black","Bronze Coin");
mintNFT("Vanshu","thick",68,"white","Diamond Coin");
listNFTs();
getTotalSupply();

