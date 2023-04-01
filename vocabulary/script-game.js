"use strict";

/*

 */
//data correct
const correct = ["Correct!", "Congratulation!", "Exactly!", "Perfect!"];
const wrong = ["Wrong!", "Incorrect!", "Try again!"];

//data choose-cours
const chooseCours = ["bai1", "bai2", "bai3", "bai4"];

//data mp3

const dataMp3s = {
  //1. The Real St. Nick
  w1: "http://docs.google.com/uc?export=open&id=1Tkf7Fh6sMhAtMxG7fRpIch7sk23haDL9",
  w2: "http://docs.google.com/uc?export=open&id=1Tnr9bf9Y0nLFTR0wNHrIhwSRP1ZcRbnN",
  w3: "http://docs.google.com/uc?export=open&id=1TlxrHz_bzjGMz37C652Su_GYdM8yYHpD",
  w4: "http://docs.google.com/uc?export=open&id=1TiqCSYljVQNkK_11RHFNPf5dxl60dSBq",
  w5: "http://docs.google.com/uc?export=open&id=1TPpPEpGb8Rvoj0fNHFsbVfUs2LhsQMLM",
  w6: "http://docs.google.com/uc?export=open&id=1Tcp_Ci_X-Nv8A517IhT-qajQBSJxZt24",
  w7: "http://docs.google.com/uc?export=open&id=1TliaVbNsIFgUfBWrY7i_THjsX4OvcclL",
  w8: "http://docs.google.com/uc?export=open&id=1TiRxL8FxPBFIplqLFi6ETZn_F6Vb1AJ0",
  w9: "http://docs.google.com/uc?export=open&id=1TVRpuui0Rws9BAW6MyiU6VP1qOlLj7jf",
  w10: "http://docs.google.com/uc?export=open&id=1TX2Ij8k6rM_gL-TfQa5_WSPDVEJ4v8SP",
  w11: "http://docs.google.com/uc?export=open&id=1TixdUQDk8oRErpbnYlPal84_XVvIRh24",
  w12: "http://docs.google.com/uc?export=open&id=1TSduIPZQbrz5DP6XEFRtfsGyMRxzMAd0",
  w13: "http://docs.google.com/uc?export=open&id=1Ta9mp-qjN5pIpf6rUHx4BMdWs7si_pGo",
  w14: "http://docs.google.com/uc?export=open&id=1TbMJDqUnx9wZqtj15MB39lhVsU7fflLE",
  w15: "http://docs.google.com/uc?export=open&id=1TRh0edKqRamOb7Dv3mPQZAE_A_3fRxIQ",
  w16: "http://docs.google.com/uc?export=open&id=1TUxaEu2JjfiF_pv-bTRfM9NaZKjOID6L",
  w17: "http://docs.google.com/uc?export=open&id=1TgMBre8PMaHZWmz3Rtf4Y3mwkJ-Sb-gu",
  w18: "http://docs.google.com/uc?export=open&id=1TRLrNPkiQSYbGo4C6RfwpsFsIib3HzXs",
  w19: "http://docs.google.com/uc?export=open&id=1TkT3-1_UA2dCf7OV_cx2UipUUWnCdFWA",
  w20: "http://docs.google.com/uc?export=open&id=1TpTLMmiAY274hz1hEKsODQ87XE_mom8h",
  //2. The Shepherd and the Wild Sheep
  w21: "http://docs.google.com/uc?export=open&id=1Wfqn-RsvtGMQpxHXhK7EYjInsXJK5xAL",
  w22: "http://docs.google.com/uc?export=open&id=1Wfzl0mU5QDtPjv0K0pObnNP8ncfeaVpa",
  w23: "http://docs.google.com/uc?export=open&id=1WgFwtWAs_2-uQsovF1B2-PT75G9QwZUh",
  w24: "http://docs.google.com/uc?export=open&id=1WgMbRP4gUdfJMbPHupU0vde8-xGLzBSj",
  w25: "http://docs.google.com/uc?export=open&id=1WjQ9SepMCM2hF-FybUBv01llukN5UxWU",
  w26: "http://docs.google.com/uc?export=open&id=1WkIBLQYZU24HDEIQTFIDN9KVSIjxtNrA",
  w27: "http://docs.google.com/uc?export=open&id=1WlbpeCjPAQ4ZxAaB_crZKZAGK4zc4qH3",
  w28: "http://docs.google.com/uc?export=open&id=1WmU2NcGgpxo5NIIh6xUhCL6NZbAkO-q0",
  w29: "http://docs.google.com/uc?export=open&id=1Wmuo5jBsaNu7dFfhAGCLWIZ5vt_IAQjA",
  w30: "http://docs.google.com/uc?export=open&id=1Wncti_DAM8Pg-qFD_TBqXs9y7sWFL9fF",
  w31: "http://docs.google.com/uc?export=open&id=1Wq0ulD-PyQRwAuD9Ri_Oc7Bcj2ky27ib",
  w32: "http://docs.google.com/uc?export=open&id=1WqJ0XF4myyPVXRxOj05JrPgxxvWJ5yvu",
  w33: "http://docs.google.com/uc?export=open&id=1WuK4rJYH3lARF5q3VvT-Vdg_3fHml0mC",
  w34: "http://docs.google.com/uc?export=open&id=1WwgBPe2Aotv_xtwOWRZ-QAy5Rm1PRjnz",
  w35: "http://docs.google.com/uc?export=open&id=1WyGmBh6A6k-cku1w3335rLhKZqfz8PI7",
  w36: "http://docs.google.com/uc?export=open&id=1X0uj7W4FXLYWMA7FYO2e263Vp2ztd7S1",
  w37: "http://docs.google.com/uc?export=open&id=1X3H6YL-lUndoYpHmfGC6JZxJ_0NNFukc",
  w38: "http://docs.google.com/uc?export=open&id=1X5phtSeVAli7MIDUCO5nsCyFrYeQiBhY",
  w39: "http://docs.google.com/uc?export=open&id=1X6fkmdiYhesLsOSroaRbJVrZXtp8VFRR",
  w40: "http://docs.google.com/uc?export=open&id=1X7DDjbuQv6hw7h89vCZIiLLqxZHuc9HO",
  //3. The Boy and his Sled
  w41: "http://docs.google.com/uc?export=open&id=1XIszuLov_QDajWHQjOu0nRBhGqEZNRHg",
  w42: "http://docs.google.com/uc?export=open&id=1XKYEOKkuFueaambuQe7F4IEwdCFILD6O",
  w43: "http://docs.google.com/uc?export=open&id=1XLL7Sy8Hl8qcSbA6wQ9e6oHIoDkDFSu0",
  w44: "http://docs.google.com/uc?export=open&id=1XLhyNyv02krVu0FFwzxHU_sZh78Yo0rq",
  w45: "http://docs.google.com/uc?export=open&id=1XPWBzU8QSRNdIRqDahS5Y2RjEE3lt93l",
  w46: "http://docs.google.com/uc?export=open&id=1XQb327fO0pGxDhCv_x_MbGiRwokXpXes",
  w47: "http://docs.google.com/uc?export=open&id=1XQm-cUvzfGuS_VsfZ7dugcgLuzMxMRVu",
  w48: "http://docs.google.com/uc?export=open&id=1XR4geclevCy78JaT2IDJdMXpYVvXNElh",
  w49: "http://docs.google.com/uc?export=open&id=1XRPeTZgeQv-RWgIYXdwPh30ljK6Aa50c",
  w50: "http://docs.google.com/uc?export=open&id=1XS8Hav6oKcZTMCqmiK6mCFQ2H8hYCKUs",
  w51: "http://docs.google.com/uc?export=open&id=1XTjtfrNcN7V27dgpOm5uyD6eR0JVefdN",
  w52: "http://docs.google.com/uc?export=open&id=1XUJh1Dz1VifcQIM1l8hpstPQLaux2s7_",
  w53: "http://docs.google.com/uc?export=open&id=1XVUnhdQ2b3fTDgSSy-BtU5FWu7d3Q5nO",
  w54: "http://docs.google.com/uc?export=open&id=1XWAzEal8xf4eAD1exCPJ6ypDtTQ8S4To",
  w55: "http://docs.google.com/uc?export=open&id=1XXMMB9ErnFxZ-gQpF5BbPyE3T2mlfumx",
  w56: "http://docs.google.com/uc?export=open&id=1XYOnMzTwgCwCjohImdG0srithvdM7CPI",
  w57: "http://docs.google.com/uc?export=open&id=1XbCA7oB0AQpNlIcuTx-N_PfO4HWB1PqX",
  w58: "http://docs.google.com/uc?export=open&id=1XcGTTQtvFQttEbXKVrHHqg73i0aFr-3U",
  w59: "http://docs.google.com/uc?export=open&id=1XfvA14jg7ppnGi_-MFbtsrhqhMlf7vtb",
  w60: "http://docs.google.com/uc?export=open&id=1XgKj03sepUbKnTa5eag_jETuaH4hWtUb",
  //4. Tiny Tina
  w61: "http://docs.google.com/uc?export=open&id=1YVYKeHzrLH6H6Ir6DgeFMKCLvJcFP93m",
  w62: "http://docs.google.com/uc?export=open&id=1YYY2AFto1GK5UoLhg09wGd8r1GSv2CWd",
  w63: "http://docs.google.com/uc?export=open&id=1Y_TUn04CT43t9mEMcbpepgHvJ7nVYpFN",
  w64: "http://docs.google.com/uc?export=open&id=1YafOKXbx2a-91u-JZ1TwtuCBXIWuXFP8",
  w65: "http://docs.google.com/uc?export=open&id=1Yal0doOoPC0IFUqhvUiLde6Doog3eGXE",
  w66: "http://docs.google.com/uc?export=open&id=1YcGK_qgfdmleGHwEXUlXjl5aKv9jitL3",
  w67: "http://docs.google.com/uc?export=open&id=1YcNNObKu6jKUYsMGDQB2mlgPGkeAJsPF",
  w68: "http://docs.google.com/uc?export=open&id=1YegCMLfTo0nMlwnIme2XV7W8LbPstDyT",
  w69: "http://docs.google.com/uc?export=open&id=1Yf8WEy8ap3xS2aOec3Z_tvCpobXnBDmW",
  w70: "http://docs.google.com/uc?export=open&id=1YhezLJoSDt-ryqAY3K77kys1riVOCHoq",
  w71: "http://docs.google.com/uc?export=open&id=1YiEEs1-lGCW2cHmmTOrc4AIxMf4isYrO",
  w72: "http://docs.google.com/uc?export=open&id=1YjZq9lt3eVRl4obFoAd4t3_84T3C2R8k",
  w73: "http://docs.google.com/uc?export=open&id=1Yk99xI09tpqmAMF8MwbfDSRjVd5Dv6jZ",
  w74: "http://docs.google.com/uc?export=open&id=1YosMEkFOLufoncF8-RtrOYB3DQRRbo1P",
  w75: "http://docs.google.com/uc?export=open&id=1Ytngyd9TQ0B5Cw_-LEQS0BFU4BkVjkgt",
  w76: "http://docs.google.com/uc?export=open&id=1YvqUbjT8c9tXZUz1oG_pJgA58lz4-U0J",
  w77: "http://docs.google.com/uc?export=open&id=1Yx6bTphLBYj1Sg79jRXqbZ6pRSvVX4uz",
  w78: "http://docs.google.com/uc?export=open&id=1YxH9DMwat_jJlyIvDv4rze9Umh72cdx8",
  w79: "http://docs.google.com/uc?export=open&id=1YygF42wg-gPQSkdgA7XW1qTOVWJ57_HN",
  w80: "http://docs.google.com/uc?export=open&id=1YzG6xxl1ldcPW6hCFElvGrrX1R8tLjFe",
};
//data question
const dataWords = {
  //1. The Real St. Nick
  w1: "Aaron often preached about living an honest life",
  w2: "Brad was filled with satisfaction when he saw what was for dinner",
  w3: "Canada is divided into several different provinces",
  w4: "Derek is very modest for someone who is so rich",
  w5: "Difficulty arose with his computer because it was old",
  w6: "Even though Bob is the smartest boy in his class, he is humble",
  w7: "Frank's new business finally prospered after many years o f hard work",
  w8: "He used a ladder to climb to the top o f his tree house",
  w9: "Her boss compensated her for the extra work she did last week",
  w10: "I encountered the sea turtle when I was swimming",
  w11: "Kevin and Alice occupied the chairs and had a long discussion",
  w12: "My sister was charitable enough to help me buy my first house",
  w13: "Since I exceeded my limit, I decided to get rid of my credit cards",
  w14: "Stacy and Heather forged their friendship when they were teenagers",
  w15: "The blacksmith pounded the piece of metal until it was flat",
  w16: "The cat was on the roof sitting next to the chimney",
  w17: "The horse had shoes made o f iron",
  w18: "The student benefactor gave him money to spend on his studies",
  w19: "U.S. President Abraham Lincoln is on the penny",
  w20: "Wind power is a clean way to sustain a city with energy",
  //2. The Shepherd and the Wild Sheep
  w21: "Tina acquired a strange package yesterday",
  w22: "After dropping his coffee cup, Robbie felt awkward",
  w23: "My grandmother's caretaker helps her get around the house",
  w24: "He tried to deceive his friends as they were playing a game",
  w25: "Mr. Perry discouraged the students from quitting school",
  w26: "The model was wearing fake eyelashes",
  w27: "I have a hatred for the taste of medicine",
  w28: "We all went into the hut to sleep",
  w29: "Cars built a hundred years ago are inferior to ones built today",
  w30: "During our ski trip, we stayed at a lodge",
  w31: "William neglected his room, so it is a complete mess",
  w32: "The students happily welcomed the newcomer to the school",
  w33: "Stealing a car is a very serious offense",
  w34: "Brenda overlooked the last step and had a bad fall",
  w35: "She repaid her friend for all o f his hard work with a small gift",
  w36: "Steve looked ridiculous with those huge blue sunglasses",
  w37: "Mina often received satisfactory grades since she studied so hard",
  w38: "The shepherd moved the sheep to another field",
  w39: "Even though it was dangerous, they ventured up the mountain",
  w40: "The field o f golden wheat was ready to be harvested",
  //3. The Boy and his Sled
  w41: "The alley behind my house looks dirty",
  w42: "She used an ax to cut some wood for the fire",
  w43: "She was hungry, so she ate the entire bunch o f grapes",
  w44: "It's Nikki's chore to do the dishes every Tuesday and Wednesday night",
  w45: "Eric did a decent job painting the fence",
  w46: "He felt a sense of disgrace after failing his big exam",
  w47: "She pointed to her elbow to show me where she hurt herself",
  w48: "The girls were grateful to have a chance to spend time with their grandfather",
  w49: "She was irritated when her brother told her that he had lost her camera",
  w50: "I am not really mad. I was kidding when I said I was angry",
  w51: "The bolt was loose, so I tightened it with the wrench",
  w52: "They were both offended by what they had said to each other",
  w53: "The campers stayed in the tent overnight",
  w54: "Even though the lesson was difficult, he persisted until he understood",
  w55: "There were many beautiful pine trees in the forest",
  w56: "The monster had horrible scars on his cheek and forehead",
  w57: "Mom got a painful sensation in her head from the loud noise",
  w58: "Marvin likes to ride his sled down the hill in winter",
  w59: "Jake teased Charlie because he was the new student",
  w60: "Harry wanted Molly to be his valentine",
  //4. Tiny Tina
  w61: "Roses look so pretty when they bloom",
  w62: "A laptop computer is much more compact than a desktop model",
  w63: "The colorful ribbons were bent into curls",
  w64: "The old wooden house was slowly decaying",
  w65: "Kayla wants ice cream for dessert",
  w66: "Laurel dipped her strawberry into the chocolate",
  w67: "Michael could barely see the distant island",
  w68: "A complete eclipse o f the sun is a very rare occurrence",
  w69: "There are usually fairies in fantasy stories",
  w70: "The ballerina danced with grace",
  w71: "Eve likes to listen to music in her leisure time",
  w72: "All of mankind has to work to make this a better world",
  w73: "She had a passion for dancing",
  w74: "When I travel, I usually take along my favorite pillow",
  w75: "The doctor checked the patient’s pulse by feeling his wrist",
  w76: "The baby was refreshed after taking a cool bath",
  w77: "He sneezed after smelling the flower",
  w78: "Two common spices found in many homes are salt and pepper",
  w79: "Ashe was listening to music, Daryl whistled",
  w80: "Grandma wants to use the blue wool to knit me a sweater",
};
let option;
let question;
document.querySelector(".select").addEventListener("click", function () {
  document.querySelector(".ready").textContent = `Let's go!`;
  option = document.getElementById("chooseCours").value;
  let minCrit = chooseCours.indexOf(option) * 20 + 0;
  let maxCrit = chooseCours.indexOf(option) * 20 + 20;
  let stt = minCrit;
  let sttPrev = minCrit;
  let x;
  document.querySelector(".nextword").addEventListener("click", function () {
    document.querySelector(".game-mp3").textContent = "";
    document.querySelector(".question").textContent = "???";
    //next button
    //lặp lại nếu click đến cuối data
    if (stt < maxCrit) {
      stt++;
    } else {
      stt -= 20;
      stt++;
    }
    //thêm thẻ mp3
    x = document.createElement("AUDIO");
    x.setAttribute("src", dataMp3s[`w${stt}`]);

    x.setAttribute("controls", "");
    document.querySelector(".game-mp3").appendChild(x);

    question = dataWords[`w${stt}`];
    console.log(question);
  });

  //prev button
  document.querySelector(".prevword").addEventListener("click", function () {
    document.querySelector(".game-mp3").textContent = "";
    document.querySelector(".question").textContent = "???";
    //next button
    //lặp lại nếu click đến cuối data
    if (stt > minCrit + 1) {
      stt--;
    } else {
      stt += 20;
      stt--;
    }

    //thêm thẻ mp3
    x = document.createElement("AUDIO");
    x.setAttribute("src", dataMp3s[`w${stt}`]);

    x.setAttribute("controls", "");
    document.querySelector(".game-mp3").appendChild(x);

    question = dataWords[`w${stt}`];
    console.log(question);
  });

  document.querySelector(".check").addEventListener("click", function () {
    let guess = document.querySelector(".guess").value;
    if (!guess) {
      document.querySelector(".message").textContent = "";
    } else if (guess.toLowerCase() === question.toLowerCase()) {
      //lấy ngẫu nhiên correct
      let randomnumber = Math.trunc(Math.random() * correct.length);
      document.querySelector(".message").textContent = correct[randomnumber];
      document.querySelector(".message").style.color = "green";
    } else {
      let randomnumber = Math.trunc(Math.random() * wrong.length);
      document.querySelector(".message").textContent = wrong[randomnumber];
      document.querySelector(".message").style.color = "red";
    }
  });
  document.querySelector(".hide").addEventListener("click", function () {
    document.querySelector(".question").textContent = question;
    console.log(question);
  });
});
