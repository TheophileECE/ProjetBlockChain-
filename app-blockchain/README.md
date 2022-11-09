---------- ID ----------

Théophile de LARQUIER
Antoine PIERSON
TD 2

---------- APPLICATION ----------

Instructions pour lancer l’app:
-   se placer dans "../ProjetBlockchain/app-blockchain"
-   installer les dépendances avec: npm install
-   lancer l'application avec la commande: npm run start

Instruction pour minter un nft:
-   Etre connecté avec un compte Metamask avec des fonds sur le réseau GoerliETH
-   Appuyer sur le button "Acheter un Xana"
-   Valider la transaction sur Metamask
-   Attendre quelques secondes jusqu'à le nombre de nft disponible baisse

Récupérer l'argent en tant que Owner:
-   Appuyer sur le button "Retirer l'argent"

Voir les informations sur la collection Xana:
-   Se rendre sur la page Informations depuis la bare de navigation

---------- LA BLOCKCHAIN ----------

Comme dans tout projet NFT, la blockchain nous permet, d'assurer l'unicité de chaque pièce vendue, ainsi que de sécuriser et authentifier la transaction entre l'acheteur et le vendeur.

Nous avons créé nos NFTs à l'aide du générateur de NFTS "hashlips_art_engine". -> https://github.com/HashLips/hashlips_art_engine
Ces NFTs sont composées de 3 layers (font, pattern, logo).
Chaque layer possède une variation commune et plusieurs variations rares.
En fonction de si une NFT comporte plusieurs layers rares ou non, elle est classée dans une catégorie:
-   Legendaire: 3 attributs rares (background de couleur, logo de couleur et pattern) + le super background sandwich
-   Epique: 3 attributs rares (background de couleur, logo de couleur et pattern)
-   Rare: 2 attributs rares parmis: background de couleur, logo de couleur et pattern
-   Commun: 1 attribut rares parmis: background de couleur, logo de couleur et pattern

Nous avons utilisé Solidity pour créer notre smart contract et nous l'avons compilé avec Hardhat avec le standard ERC721.