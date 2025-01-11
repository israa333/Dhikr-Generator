const quotes = [
    "Lā ilāha illā-Allāh",
    "Lā ḥawla wa lā quwwata illā bi-llāh",
    "Allāhumma ṣalli ʿalā Muḥammad wa ʿalā āli Muḥammad, kamā ṣallayta ʿalā Ibrāhīma wa ʿalā āli Ibrāhīm, innaka Ḥamīdu-m-Majīd, Allāhumma bārik ʿalā Muḥammad, wa ʿalā āli Muḥammad, kamā bārakta ʿalā Ibrāhīma wa ʿalā āli Ibrāhīm, innaka Ḥamīdu-m-Majīd.",
    "Lā ilāha illā-Allāh, waḥdahū lā sharīka lah, lahu-l-mulk, wa lahu-l-ḥamd, wa Huwa ʿalā kulli shay’in Qadīr.",
    "Subḥāna-llāh. wal-lḥamdu li-llāh, wa lā ilāha illa-llāhu wa-llāhu akbar.",
    "Subḥāna-llāhi wa bi-ḥamdihī, subḥāna-llāhi-l-aẓīm.",
    "Yā Ḥayyu yā Qayyūm, bi-raḥmatika astaghīth.",
"Astaghfiru-l-llāha-l-aẓīm al-ladhī lā ilāha illā Huwa-l-Ḥayyu-l-Qayyūm, wa atūbu ilayh.",
"Verily, with hardship, there is relief.Quran 94:5",

"اَلْحَمْدُ لِلّٰهِ الَّذِيٓ أَنْزَلَ عَلَىٰ عَبْدِهِ الْكِتَابَ وَلَمْ يَجْعَلْ لَّهُ عِوَجًا.",

"لَآ إِلٰهَ إِلَّآ أَنْتَ سُبۡحٰنَكَ إِنِّيْ كُنْتُ مِنَ الظّٰلِمِيْنَ",
"سُبْحَانَ اللهِ ، وَالْحَمْدُ لِلهِ وَلَا إِلٰهَ إِلَّا اللهُ ، وَاللهُ أَكْبَرُ.",
"اَلْحَمْدُ لِلّٰهِ الَّذِيْ كَفَانِيْ وَآوَانِيْ ، اَلْحَمْدُ لِلّٰهِ الَّذِيْ أَطْعَمَنِيْ وَسَقَانِيْ ، اَلْحَمْدُ لِلّٰهِ الَّذِيْ مَنَّ عَلَيَّ فَأَفْضَلَ ، اَللّٰهُمَّ إِنِّيْ أَسْأَلُكَ بِعِزَّتِكَ أَنْ تُنَجِّيَنِيْ مِنَ النَّارِ.",

]

const usedIndexes = new Set() // does not repeat an element , fast data structure 
const quoteElement = document.getElementById("quote")

function generateQuote() {

    if (usedIndexes.size >= quotes.length){
        usedIndexes.clear()

    }

    while (true){
        const randomIdx = Math.floor(Math.random() * quotes.length)

        if (usedIndexes.has(randomIdx)) continue

    
        const quote = quotes[randomIdx]
        quoteElement.innerHTML = quote;
        usedIndexes.add(randomIdx)
        break

    }
}