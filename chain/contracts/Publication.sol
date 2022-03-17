// SPDX-License-Identifier: UNLICENSED
// Solidity files have to start with this pragma.
// It will be used by the Solidity compiler to validate its version.
pragma solidity ^0.7.3;

// Hardhat exposes a console.log which is very useful in development
// but make sure to remove it before deployment
// import "hardhat/console.sol";

// This is the main building block for smart contracts.
contract Publication {

    mapping(uint256 => Post) internal posts_;

    mapping(address => Librarian) internal librarians_;

    struct Post {
        string name;
        address author;
    }

    struct Librarian {
        string name;
        bool canPost;
        bool isOmni; //Can Add other Librarians
    }

    uint256 private _postCount;
    uint256 private _librarianCount;

    event Publish(uint256 id, address author, string name, string data);

    event LibrarianCreated(string name, address librarianAddress, address omniAddress, bool isOmni);
  
    modifier onlyPoster() {
        require(
            librarians_[msg.sender].canPost,
            "Not a Librarian!"
        );
        _;
    }

     modifier onlyOmni() {
        require(
            librarians_[msg.sender].isOmni,
            "Not an Omni-Librarian!"
        );
        _;
    }
    
    constructor() {
        _postCount = 0;
        _librarianCount = 1;
        librarians_[msg.sender].name = "Deployer";
        librarians_[msg.sender].canPost = true;
        librarians_[msg.sender].isOmni = true;
    }

    function post(string calldata data, string calldata name) public onlyPoster() {
        _postCount += 1;
        posts_[_postCount].name = name;
        posts_[_postCount].author = msg.sender;
        emit Publish(_postCount, msg.sender, name, data);
    }

    function setPoster(address librarianAddress, string calldata name, bool isOmni) public onlyOmni(){
         _librarianCount += 1;
        librarians_[librarianAddress].canPost = true;
        librarians_[librarianAddress].name = name;
        librarians_[librarianAddress].isOmni = isOmni;
        emit LibrarianCreated(name, librarianAddress, msg.sender, isOmni);
    }
}