GB = {
    newbie_code: [],
    newbie_name: "newbie.txt", 
    hard_code: [],
    hard_name: "hard.txt"
}

$(document).ready(function () {
    generator_btn();
    reset();
    input_filleed()
    download_btn();
    edit_btn();
    reset_table();
    reset_btn();
})




// function copy_btn() {

//     // Copy Ang - Pol
//     var copyTextToClipboard = function () {
//         var input = document.querySelector('#ang-pol');
//         input.select();
//         document.execCommand("copy");
//         $('#ang-pol').css("background", "green");
//     }
//     var copy = document.querySelector('.ap')
//     copy.addEventListener('click', copyTextToClipboard);

//     // Copy Pol - Ang
//     var copyTextToClipboard = function () {
//         var input = document.querySelector('#pol-ang');
//         input.select();
//         document.execCommand("copy");
//         $('#pol-ang').css("background", "green");
//     }
//     var copy = document.querySelector('.pa')
//     copy.addEventListener('click', copyTextToClipboard);

//     // Copy Fon - Ang
//     var copyTextToClipboard = function () {
//         var input = document.querySelector('#pho-ang');
//         input.select();
//         document.execCommand("copy");
//         $('#pho-ang').css("background", "green");
//     }
//     var copy = document.querySelector('.pha')
//     copy.addEventListener('click', copyTextToClipboard);

//     // Copy Wym - Pol
//     var copyTextToClipboard = function () {
//         var input = document.querySelector('#pron-ang');
//         input.select();
//         document.execCommand("copy");
//         $('#pron-ang').css("background", "green");
//     }
//     var copy = document.querySelector('.proa')
//     copy.addEventListener('click', copyTextToClipboard);

//     // Copy Pol - Wym
//     var copyTextToClipboard = function () {
//         var input = document.querySelector('#pol-pron');
//         input.select();
//         document.execCommand("copy");
//         $('#pol-pron').css("background", "green");
//     }
//     var copy = document.querySelector('.ppron')
//     copy.addEventListener('click', copyTextToClipboard);

//     // Copy Dodatek
//     var copyTextToClipboard = function (e) {
//         var input = document.querySelector('#dodatek');
//         input.select();
//         document.execCommand("copy");
//         $('#dodatek').css("background", "green");
//     }
//     var copy = document.querySelector('.exp')
//     copy.addEventListener('click', copyTextToClipboard);
// }


function generator_btn() {
    $('#generate-btn').on('click', function () {

        const Polish_word_1 = $('.input_text #polish_name_1_inpt').val();
        const English_word = $('.input_text #english_name_inpt').val();

        if (!(Polish_word_1 === "") && !(English_word === "")) {
            show();

            $(' .warning-info').css("display", "none");
            $('#english_name_inpt, #polish_name_1_inpt').removeClass("input-warning");
        } else {
            $('.warning-info').css("display", "block");

            if (English_word === "") {
                $('#english_name_inpt').addClass("input-warning");
            }

            if (Polish_word_1 === "") {
                $('#polish_name_1_inpt').addClass("input-warning");
            }
        }
    })

}

// Nie dodałem zabezpieczenia przed dodaniem do 1# i 3# pola z pominięciem 2# - odpali się funkcja code_3
function show() {
   
    const English_word = $('.input_text #english_name_inpt').val();
    const Phonetics = $('.input_text #english_phonetics').val();
    const Sound = $('.input_text #sound').val();
    const Mnemonic = $('.input_text #mnemonic').val();
    const Polish_word_1 = $('.input_text #polish_name_1_inpt').val();
    const Polish_word_2 = $('.input_text #polish_name_2_inpt').val();
    const Polish_word_3 = $('.input_text #polish_name_3_inpt').val();
    const Polish_word_4 = $('.input_text #polish_name_4_inpt').val();
    const Example_sentence = $('.input_text #example_sentence').val();
    const example_phonetics = $('.input_text #example_phonetics').val();
    const Example_Polish = $('.input_text #example_polish').val();

    if (Polish_word_2 === '' && Polish_word_3 === '') {

        let tmp_tab = code_1(Polish_word_1, English_word, Sound, Phonetics, Mnemonic, example_phonetics, Example_sentence, Example_Polish)

        if (GB.newbie_code[GB.newbie_code.length - 1] !== tmp_tab) {

            GB.newbie_code.push(code_1(Polish_word_1, English_word, Sound, Phonetics, Mnemonic, example_phonetics, Example_sentence, Example_Polish))
        }
    } else if (Polish_word_2 !== '' && Polish_word_3 === '') {
        let tmp_tab = code_2(Polish_word_1, Polish_word_2, English_word, Sound, Phonetics, Mnemonic, example_phonetics, Example_sentence, Example_Polish)
        
        if (GB.newbie_code[GB.newbie_code.length - 1] !== tmp_tab) {

            GB.newbie_code.push(code_2(Polish_word_1, Polish_word_2, English_word, Sound, Phonetics, Mnemonic, example_phonetics, Example_sentence, Example_Polish));

            GB.hard_code.push(code_2_profesional(Polish_word_1, Polish_word_2, English_word, Sound, Phonetics, Mnemonic, example_phonetics, Example_sentence, Example_Polish));
        }

        
    } else if (Polish_word_2 !== '' && Polish_word_3 === '' && Polish_word_3 === '') {
        let tmp_tab = code_3(Polish_word_1, Polish_word_2, Polish_word_3, English_word, Sound, Phonetics, Mnemonic, example_phonetics, Example_sentence, Example_Polish)
            
        if (GB.newbie_code[GB.newbie_code.length - 1] !== tmp_tab) {

            GB.newbie_code.push(code_3(Polish_word_1, Polish_word_2, Polish_word_3, English_word, Sound, Phonetics, Mnemonic, example_phonetics, Example_sentence, Example_Polish))

            GB.hard_code.push(code_3_profesional(Polish_word_1, Polish_word_2, Polish_word_3, English_word, Sound, Phonetics, Mnemonic, example_phonetics, Example_sentence, Example_Polish));
        }
    } else {
        let tmp_tab = code_4(Polish_word_1, Polish_word_2, Polish_word_3, Polish_word_4, English_word, Sound, Phonetics, Mnemonic, example_phonetics, Example_sentence, Example_Polish)
            
        if (GB.newbie_code[GB.newbie_code.length - 1] !== tmp_tab) {

            GB.newbie_code.push(code_4(Polish_word_1, Polish_word_2, Polish_word_3, Polish_word_4, English_word, Sound, Phonetics, Mnemonic, example_phonetics, Example_sentence, Example_Polish))

            GB.hard_code.push(code_4_profesional(Polish_word_1, Polish_word_2, Polish_word_3, Polish_word_4, English_word, Sound, Phonetics, Mnemonic, example_phonetics, Example_sentence, Example_Polish));
        }
    }

    console.log('GB.newbie_code: ', GB.newbie_code);

    $('#info_btn').val("Ilość pakietów gotowych do pobrania: " + GB.newbie_code.length);
}

function download_btn() {
    $("#download_btn").on("click", function () {
        download_file(GB.newbie_code, GB.newbie_name);
        download_file(GB.hard_code, GB.hard_name);
    })
}

function edit_btn() {
    $("#edit-btn").on("click", function () {
        GB.newbie_code.pop();
        GB.hard_code.pop();
        $('#info_btn').val("Ilość pakietów gotowych do pobrania: " + GB.newbie_code.length);
    })
}

function reset_table() {
    $('#permanent_delete_btn').on("click", function () {
        GB.newbie_code = [];
        GB.hard_code = [];
        $('#info_btn').val("Ilość pakietów gotowych do pobrania: " + GB.newbie_code.length);
        reset();
    })
}

function reset_btn() {
    $('#reset_btn').on('click', () => {
        reset();
    })
}

function download_file(code, name) {
    console.log('GB.newbie_code: ', GB.newbie_code);
    let tmp_tab = code.join(`
`)
    
    var blob = new Blob([tmp_tab], {
        type: "text/plain; charset=utf-8"
    });
    saveAs(blob, name);

    if (code === GB.newbie_code) {
        GB.newbie_code = [];
    } else {
        GB.hard_code = [];
    }
    $('#info_btn').val("Ilość pakietów gotowych do pobrania: " + GB.newbie_code.length);
}

function code_1(PL_1, EN, Sound, Pho, Mnemo, Exp_pho, Exp_sent, Exp_PL) {
    return `{{c1::${EN}}}<br><br>{{c2::${PL_1}}}	${PL_1}	${EN}	${Pho}	${Sound}	${Mnemo}	${Exp_sent}	${Exp_pho}	${Exp_PL}
    sound: ${Sound}<br><br>{{c1::${PL_1}}}	${PL_1}	${EN}	${Pho}	${Sound}	${Mnemo}	${Exp_sent}	${Exp_pho}	${Exp_PL}
    ${PL_1}<br><br>sound: {{c1::${Sound}<br>${Pho}}}	${PL_1}	${EN}	${Pho}	${Sound}	${Mnemo}	${Exp_sent}	${Exp_pho}	${Exp_PL}
`
}

function code_2(PL_1, PL_2, EN, Sound, Pho, Mnemo, Exp_pho, Exp_sent, Exp_PL) {
    return `{{c1::${EN}}}<br><br>{{c2::${PL_1}}}&sbquo; {{c3::${PL_2}}}	${PL_1}&sbquo; ${PL_2}	${EN}	${Pho}	${Sound}	${Mnemo}	${Exp_sent}	${Exp_pho}	${Exp_PL}
    sound: ${Sound}<br><br>{{c1::${PL_1}}}&sbquo; {{c2::${PL_2}}}	${PL_1}&sbquo; ${PL_2}	${EN}	${Pho}	${Sound}	${Mnemo}	${Exp_sent}	${Exp_pho}	${Exp_PL}
    ${PL_1}&sbquo; ${PL_2}<br><br>sound: {{c1::${Sound}<br>${Pho}}}	${PL_1}&sbquo; ${PL_2}	${EN}	${Pho}	${Sound}	${Mnemo}	${Exp_sent}	${Exp_pho}	${Exp_PL}
    {{c1::${EN}}}<br><br>{{c2::${PL_2}}}&sbquo; {{c3::${PL_1}}}	${PL_1}&sbquo; ${PL_2}	${EN}	${Pho}	${Sound}	${Mnemo}	${Exp_sent}	${Exp_pho}	${Exp_PL}
`
}

function code_3(PL_1, PL_2, PL_3, EN, Sound, Pho, Mnemo, Exp_pho, Exp_sent, Exp_PL) {
    return `{{c1::${EN}}}<br><br>{{c2::${PL_1}}}&sbquo; {{c3::${PL_2}}}&sbquo; {{c4::${PL_3}}}	${PL_1}&sbquo; ${PL_2}&sbquo; ${PL_3}	${EN}	${Pho}	${Sound}	${Mnemo}	${Exp_sent}	${Exp_pho}	${Exp_PL}
    sound: ${Sound}<br><br>{{c1::${PL_1}}}&sbquo; {{c2::${PL_2}}}&sbquo; {{c3::${PL_3}}}	${PL_1}&sbquo; ${PL_2}&sbquo; ${PL_3}	${EN}	${Pho}	${Sound}	${Mnemo}	${Exp_sent}	${Exp_pho}	${Exp_PL}
    ${PL_1}&sbquo; ${PL_2}&sbquo; ${PL_3}<br><br>sound: {{c1::${Sound}<br>${Pho}}}	${PL_1}&sbquo; ${PL_2}&sbquo; ${PL_3}	${EN}	${Pho}	${Sound}	${Mnemo}	${Exp_sent}	${Exp_pho}	${Exp_PL}
    {{c1::${EN}}}<br><br>{{c2::${PL_1}}}&sbquo; {{c3::${PL_3}}}&sbquo; {{c4::${PL_2}}}	${PL_1}&sbquo; ${PL_2}&sbquo; ${PL_3}	${EN}	${Pho}	${Sound}	${Mnemo}	${Exp_sent}	${Exp_pho}	${Exp_PL}
    {{c1::${EN}}}<br><br>{{c2::${PL_2}}}&sbquo; {{c3::${PL_1}}}&sbquo; {{c4::${PL_3}}}	${PL_1}&sbquo; ${PL_2}&sbquo; ${PL_3}	${EN}	${Pho}	${Sound}	${Mnemo}	${Exp_sent}	${Exp_pho}	${Exp_PL}
    {{c1::${EN}}}<br><br>{{c2::${PL_2}}}&sbquo; {{c3::${PL_3}}}&sbquo; {{c4::${PL_1}}}	${PL_1}&sbquo; ${PL_2}&sbquo; ${PL_3}	${EN}	${Pho}	${Sound}	${Mnemo}	${Exp_sent}	${Exp_pho}	${Exp_PL}
    {{c1::${EN}}}<br><br>{{c2::${PL_3}}}&sbquo; {{c3::${PL_1}}}&sbquo; {{c4::${PL_2}}}	${PL_1}&sbquo; ${PL_2}&sbquo; ${PL_3}	${EN}	${Pho}	${Sound}	${Mnemo}	${Exp_sent}	${Exp_pho}	${Exp_PL}
    {{c1::${EN}}}<br><br>{{c2::${PL_3}}}&sbquo; {{c3::${PL_2}}}&sbquo; {{c4::${PL_1}}}	${PL_1}&sbquo; ${PL_2}&sbquo; ${PL_3}	${EN}	${Pho}	${Sound}	${Mnemo}	${Exp_sent}	${Exp_pho}	${Exp_PL}
`
}

function code_4(PL_1, PL_2, PL_3, PL_4, EN, Sound, Pho, Mnemo, Exp_pho, Exp_sent, Exp_PL) {
    return `{{c1::${EN}}}<br><br>{{c2::${PL_1}}}&sbquo; {{c3::${PL_2}}}&sbquo; {{c4::${PL_3}}}&sbquo; {{c5::${PL_4}}}	${PL_1}&sbquo; ${PL_2}&sbquo; ${PL_3}&sbquo; ${PL_4}	${EN}	${Pho}	${Sound}	${Mnemo}	${Exp_sent}	${Exp_pho}	${Exp_PL}
    sound: ${Sound}<br><br>{{c1::${PL_1}}}&sbquo; {{c2::${PL_2}}}&sbquo; {{c3::${PL_3}}}&sbquo; {{c4::${PL_4}}}	${PL_1}&sbquo; ${PL_2}&sbquo; ${PL_3}&sbquo; ${PL_4}	${EN}	${Pho}	${Sound}	${Mnemo}	${Exp_sent}	${Exp_pho}	${Exp_PL}
    ${PL_1}&sbquo; ${PL_2}&sbquo; ${PL_3}&sbquo; ${PL_4}<br><br>sound: {{c1::${Sound}<br>${Pho}}}	${PL_1}&sbquo; ${PL_2}&sbquo; ${PL_3}&sbquo; ${PL_4}	${EN}	${Pho}	${Sound}	${Mnemo}	${Exp_sent}	${Exp_pho}	${Exp_PL}
    {{c1::${EN}}}<br><br>{{c2::${PL_4}}}&sbquo; {{c3::${PL_3}}}&sbquo; {{c4::${PL_2}}}&sbquo; {{c5::${PL_1}}}	${PL_1}&sbquo; ${PL_2}&sbquo; ${PL_3}&sbquo; ${PL_4}	${EN}	${Pho}	${Sound}	${Mnemo}	${Exp_sent}	${Exp_pho}	${Exp_PL}
    {{c1::${EN}}}<br><br>{{c2::${PL_3}}}&sbquo; {{c3::${PL_1}}}&sbquo; {{c4::${PL_4}}}&sbquo; {{c5::${PL_2}}}	${PL_1}&sbquo; ${PL_2}&sbquo; ${PL_3}&sbquo; ${PL_4}	${EN}	${Pho}	${Sound}	${Mnemo}	${Exp_sent}	${Exp_pho}	${Exp_PL}
    {{c1::${EN}}}<br><br>{{c2::${PL_2}}}&sbquo; {{c3::${PL_4}}}&sbquo; {{c4::${PL_1}}}&sbquo; {{c5::${PL_3}}}	${PL_1}&sbquo; ${PL_2}&sbquo; ${PL_3}&sbquo; ${PL_4}	${EN}	${Pho}	${Sound}	${Mnemo}	${Exp_sent}	${Exp_pho}	${Exp_PL}
`
}

function code_2_profesional(PL_1, PL_2, EN, Sound, Pho, Mnemo, Exp_pho, Exp_sent, Exp_PL) {
    return `{{c1::${EN}}}<br><br>{{c2::${PL_1}}}&sbquo; {{c2::${PL_2}}}	${PL_1}&sbquo; ${PL_2}	${EN}	${Pho}	${Sound}	${Mnemo}	${Exp_sent}	${Exp_pho}	${Exp_PL}
    {{c1::${EN}}}<br><br>{{c1::${PL_1}}}&sbquo; {{c2::${PL_2}}}	${PL_1}&sbquo; ${PL_2}	${EN}	${Pho}	${Sound}	${Mnemo}	${Exp_sent}	${Exp_pho}	${Exp_PL}
    {{c1::${EN}}}<br><br>{{c2::${PL_1}}}&sbquo; {{c1::${PL_2}}}	${PL_1}&sbquo; ${PL_2}	${EN}	${Pho}	${Sound}	${Mnemo}	${Exp_sent}	${Exp_pho}	${Exp_PL}
    ${EN}<br><br>{{c1::${PL_1}}}&sbquo; {{c1::${PL_2}}}	${PL_1}&sbquo; ${PL_2}	${EN}	${Pho}	${Sound}	${Mnemo}	${Exp_sent}	${Exp_pho}	${Exp_PL}
`
}

function code_3_profesional(PL_1, PL_2, PL_3, EN, Sound, Pho, Mnemo, Exp_pho, Exp_sent, Exp_PL) {
    return `{{c1::${EN}}}<br><br>{{c2::${PL_1}}}&sbquo; {{c2::${PL_2}}}&sbquo; {{c1::${PL_3}}}	${PL_1}&sbquo; ${PL_2}&sbquo; ${PL_3}	${EN}	${Pho}	${Sound}	${Mnemo}	${Exp_sent}	${Exp_pho}	${Exp_PL}
    {{c1::${EN}}}<br><br>{{c1::${PL_1}}}&sbquo; {{c2::${PL_2}}}&sbquo; {{c2::${PL_3}}}	${PL_1}&sbquo; ${PL_2}&sbquo; ${PL_3}	${EN}	${Pho}	${Sound}	${Mnemo}	${Exp_sent}	${Exp_pho}	${Exp_PL}
    {{c1::${EN}}}<br><br>{{c2::${PL_1}}}&sbquo; {{c1::${PL_2}}}&sbquo; {{c2::${PL_3}}}	${PL_1}&sbquo; ${PL_2}&sbquo; ${PL_3}	${EN}	${Pho}	${Sound}	${Mnemo}	${Exp_sent}	${Exp_pho}	${Exp_PL}
    ${EN}<br><br>{{c1::${PL_1}}}&sbquo; {{c1::${PL_2}}}&sbquo; {{c1::${PL_3}}}	${PL_1}&sbquo; ${PL_2}&sbquo; ${PL_3}	${EN}	${Pho}	${Sound}	${Mnemo}	${Exp_sent}	${Exp_pho}	${Exp_PL}
`
}

function code_4_profesional(PL_1, PL_2, PL_3, PL_4, EN, Sound, Pho, Mnemo, Exp_pho, Exp_sent, Exp_PL) {
    return `{{c1::${EN}}}<br><br>{{c2::${PL_1}}}&sbquo; {{c2::${PL_2}}}&sbquo; {{c1::${PL_3}}}&sbquo; {{c1::${PL_4}}}	${PL_1}&sbquo; ${PL_2}&sbquo; ${PL_3}&sbquo; ${PL_4}	${EN}	${Pho}	${Sound}	${Mnemo}	${Exp_sent}	${Exp_pho}	${Exp_PL}
    {{c1::${EN}}}<br><br>{{c1::${PL_1}}}&sbquo; {{c2::${PL_2}}}&sbquo; {{c2::${PL_3}}}&sbquo; {{c2::${PL_4}}}	${PL_1}&sbquo; ${PL_2}&sbquo; ${PL_3}&sbquo; ${PL_3}	${EN}	${Pho}	${Sound}	${Mnemo}	${Exp_sent}	${Exp_pho}	${Exp_PL}
    {{c1::${EN}}}<br><br>{{c2::${PL_1}}}&sbquo; {{c1::${PL_2}}}&sbquo; {{c2::${PL_3}}}&sbquo; {{c2::${PL_3}}}	${PL_1}&sbquo; ${PL_2}&sbquo; ${PL_3}&sbquo; ${PL_3}	${EN}	${Pho}	${Sound}	${Mnemo}	${Exp_sent}	${Exp_pho}	${Exp_PL}
    ${EN}<br><br>{{c1::${PL_1}}}&sbquo; {{c1::${PL_2}}}&sbquo; {{c1::${PL_3}}}&sbquo; {{c1::${PL_3}}}	${PL_1}&sbquo; ${PL_2}&sbquo; ${PL_3}&sbquo; ${PL_3}	${EN}	${Pho}	${Sound}	${Mnemo}	${Exp_sent}	${Exp_pho}	${Exp_PL}
`
}

function reset() {
        $('.input_text #polish_name_1_inpt').val("");
        $('.input_text #polish_name_2_inpt').val("");
        $('.input_text #polish_name_3_inpt').val("");
        $('.input_text #polish_name_4_inpt').val("");
        $('.input_text #english_name_inpt').val("");
        $('.input_text #english_phonetics').val("");
        $('.input_text #example_phonetics').val("");
        $('.input_text #example_sentence').val("");
        $('.input_text #example_polish').val("");
        $('.input_text #mnemonic').val("");
        $('.input_text #sound').val("");

        $('.input-style').removeClass('input-warning');
        $('.input_text').removeClass('focus');
        $('.input_container p').css('display', 'none');
        $('.input_text input').removeClass('filled')
}



function input_filleed() {
    $('.input_text input').focus(function () {
        $(this).parent().addClass('focus');
    })
    $('.input_text input').focusout(function () {
        if ($(this).val() !== "") {
            $(this).addClass('filled');
        } else {
            $(this).parent().removeClass('focus');
            $(this).removeClass('filled');
        }
    })
}

document.addEventListener("keyup", function (e) {
    if (e.key === "1" && e.altKey) {
        $('#english_name_inpt').select().focus();
    } else if (e.key == '2' && e.altKey) {
        $('#polish_name_1_inpt').select().focus();
    } else if (e.key == '3' && e.altKey) {
        $('#example_sentence').select().focus();
    } else if (e.key == 'q' && e.altKey) {
        $('#generate-btn').click();
    } else if (e.key == 's' && e.altKey) {
        $('#reset_btn').click();
    }
});