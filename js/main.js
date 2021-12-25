GB = {
    newbie_code: [],
    newbie_code_pl: [],
    newbie_name_en: "Anki_Słówka_EN_PL.txt", 
    newbie_name_pl: "Anki_Słówka_PL_EN.txt",
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

// === btn - Dodaj do kolejki
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

function show() {
   
    const English_word = $('.input_text #english_name_inpt').val();
    const Phonetics = $('.input_text #english_phonetics').val();
    const Sound = $('.input_text #sound').val();
    const Polish_word_1 = $('.input_text #polish_name_1_inpt').val();
    const Polish_word_2 = $('.input_text #polish_name_2_inpt').val();
    const Polish_word_3 = $('.input_text #polish_name_3_inpt').val();
    const Polish_word_4 = $('.input_text #polish_name_4_inpt').val();
    const Polish_word_5 = $('.input_text #polish_name_5_inpt').val();
    const Polish_word_6 = $('.input_text #polish_name_6_inpt').val();


    if (Polish_word_2 === '' && Polish_word_3 === '' && Polish_word_4 === '' && Polish_word_5 === '' && Polish_word_6 === '') {

        let tmp_tab = code_1(Polish_word_1, English_word, Sound, Phonetics)

        if (GB.newbie_code[GB.newbie_code.length - 1] !== tmp_tab) {
            GB.newbie_code.push(code_1(Polish_word_1, English_word, Sound, Phonetics))
            GB.newbie_code_pl.push(code_1_pl(Polish_word_1, English_word, Sound, Phonetics))
        }

    } else if (Polish_word_2 !== '' && Polish_word_3 === '' && Polish_word_4 === '' && Polish_word_5 === '' && Polish_word_6 === '') {
        let tmp_tab = code_2(Polish_word_1, Polish_word_2, English_word, Sound, Phonetics)
        
        if (GB.newbie_code[GB.newbie_code.length - 1] !== tmp_tab) {
            GB.newbie_code.push(code_2(Polish_word_1, Polish_word_2, English_word, Sound, Phonetics));
            GB.newbie_code_pl.push(code_2_pl(Polish_word_1, Polish_word_2, English_word, Sound, Phonetics));
        }
        
    } else if (Polish_word_2 !== '' && Polish_word_3 !== '' && Polish_word_4 === '' && Polish_word_5 === '' && Polish_word_6 === '') {
        let tmp_tab = code_3(Polish_word_1, Polish_word_2, Polish_word_3, English_word, Sound, Phonetics)
            
        if (GB.newbie_code[GB.newbie_code.length - 1] !== tmp_tab) {
            GB.newbie_code.push(code_3(Polish_word_1, Polish_word_2, Polish_word_3, English_word, Sound, Phonetics))
            GB.newbie_code_pl.push(code_3_pl(Polish_word_1, Polish_word_2, Polish_word_3, English_word, Sound, Phonetics))
        }

    } else if (Polish_word_2 !== '' && Polish_word_3 !== '' && Polish_word_4 !== '' && Polish_word_5 === '' && Polish_word_6 === '') {
        let tmp_tab = code_4(Polish_word_1, Polish_word_2, Polish_word_3, Polish_word_4, English_word, Sound, Phonetics)
            
        if (GB.newbie_code[GB.newbie_code.length - 1] !== tmp_tab) {
            GB.newbie_code.push(code_4(Polish_word_1, Polish_word_2, Polish_word_3, Polish_word_4, English_word, Sound, Phonetics))
            GB.newbie_code_pl.push(code_4_pl(Polish_word_1, Polish_word_2, Polish_word_3, Polish_word_4, English_word, Sound, Phonetics))
        }

    } else if (Polish_word_2 !== '' && Polish_word_3 !== '' && Polish_word_4 !== '' && Polish_word_5 !== '' && Polish_word_6 === '' ) {
        let tmp_tab = code_5(Polish_word_1, Polish_word_2, Polish_word_3, Polish_word_4, Polish_word_5, English_word, Sound, Phonetics)
            
        if (GB.newbie_code[GB.newbie_code.length - 1] !== tmp_tab) {
            GB.newbie_code.push(code_5(Polish_word_1, Polish_word_2, Polish_word_3, Polish_word_4, Polish_word_5, English_word, Sound, Phonetics))
            GB.newbie_code_pl.push(code_5_pl(Polish_word_1, Polish_word_2, Polish_word_3, Polish_word_4, Polish_word_5, English_word, Sound, Phonetics))
        }

    } else {
        let tmp_tab = code_6(Polish_word_1, Polish_word_2, Polish_word_3, Polish_word_4, Polish_word_5, Polish_word_6, English_word, Sound, Phonetics)
            
        if (GB.newbie_code[GB.newbie_code.length - 1] !== tmp_tab) {
            GB.newbie_code.push(code_6(Polish_word_1, Polish_word_2, Polish_word_3, Polish_word_4, Polish_word_5, Polish_word_6, English_word, Sound, Phonetics))
            GB.newbie_code_pl.push(code_6_pl(Polish_word_1, Polish_word_2, Polish_word_3, Polish_word_4, Polish_word_5, Polish_word_6, English_word, Sound, Phonetics))
        }
    }

    $('#info_btn').val("Ilość pakietów gotowych do pobrania: " + GB.newbie_code.length);
}

function download_btn() {
    $("#download_btn").on("click", function () {
        download_file(GB.newbie_code, GB.newbie_name_en);
        download_file(GB.newbie_code_pl, GB.newbie_name_pl);
    })
}

function edit_btn() {
    $("#edit-btn").on("click", function () {
        GB.newbie_code.pop();
        $('#info_btn').val("Ilość pakietów gotowych do pobrania: " + GB.newbie_code.length);
    })
}

function reset_table() {
    $('#permanent_delete_btn').on("click", function () {
        GB.newbie_code = [];
        GB.newbie_code_pl = [];
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
    let tmp_tab = code.join(`
`)
    
    var blob = new Blob([tmp_tab], {
        type: "text/plain; charset=utf-8"
    });

    saveAs(blob, name);

    code = [];

    $('#info_btn').val("Ilość pakietów gotowych do pobrania: " + GB.newbie_code.length);
}

function code_1(PL_1, EN, Sound, Pho) {
    return `${EN}	${PL_1}	${EN}	${Pho}	${Sound}
    sound: ${Sound}	${PL_1}	${EN}	${Pho}	${Sound}
`
}

function code_1_pl(PL_1, EN, Sound, Pho) {
    return `${PL_1}	${PL_1}	${EN}	${Pho}	${Sound}
`
}

function code_2(PL_1, PL_2, EN, Sound, Pho) {
    return `${EN}	${PL_1}&sbquo; ${PL_2}	${EN}	${Pho}	${Sound}
    sound: ${Sound}	${PL_1}&sbquo; ${PL_2}	${EN}	${Pho}	${Sound}
`
}
function code_2_pl(PL_1, PL_2, EN, Sound, Pho) {
    return `${PL_1}&sbquo; ${PL_2}	${PL_1}&sbquo; ${PL_2}	${EN}	${Pho}	${Sound}
`
}

function code_3(PL_1, PL_2, PL_3, EN, Sound, Pho) {
    return `${EN}	${PL_1}&sbquo; ${PL_2}&sbquo; ${PL_3}	${EN}	${Pho}	${Sound}
    sound: ${Sound}	${PL_1}&sbquo; ${PL_2}&sbquo; ${PL_3}	${EN}	${Pho}	${Sound}
`
}
function code_3_pl(PL_1, PL_2, PL_3, EN, Sound, Pho) {
    return `${PL_1}&sbquo; ${PL_2}&sbquo; ${PL_3}	${PL_1}&sbquo; ${PL_2}&sbquo; ${PL_3}	${EN}	${Pho}	${Sound}
`
}

function code_4(PL_1, PL_2, PL_3, PL_4, EN, Sound, Pho) {
    return `${EN}	${PL_1}&sbquo; ${PL_2}&sbquo; ${PL_3}&sbquo; ${PL_4}	${EN}	${Pho}	${Sound}
    sound: ${Sound}	${PL_1}&sbquo; ${PL_2}&sbquo; ${PL_3}&sbquo; ${PL_4}	${EN}	${Pho}	${Sound}
`
}
function code_4_pl(PL_1, PL_2, PL_3, PL_4, EN, Sound, Pho) {
    return `${PL_1}&sbquo; ${PL_2}&sbquo; ${PL_3}&sbquo; ${PL_4}	${PL_1}&sbquo; ${PL_2}&sbquo; ${PL_3}&sbquo; ${PL_4}	${EN}	${Pho}	${Sound}
`
}

function code_5(PL_1, PL_2, PL_3, PL_4, PL_5, EN, Sound, Pho) {
    return `${EN}	${PL_1}&sbquo; ${PL_2}&sbquo; ${PL_3}&sbquo; ${PL_4}&sbquo; ${PL_5}	${EN}	${Pho}	${Sound}
    sound: ${Sound}	${PL_1}&sbquo; ${PL_2}&sbquo; ${PL_3}&sbquo; ${PL_4}&sbquo; ${PL_5}	${EN}	${Pho}	${Sound}
`
}
function code_5_pl(PL_1, PL_2, PL_3, PL_4, PL_5, EN, Sound, Pho) {
    return `${PL_1}&sbquo; ${PL_2}&sbquo; ${PL_3}&sbquo; ${PL_4}&sbquo; ${PL_5}	${PL_1}&sbquo; ${PL_2}&sbquo; ${PL_3}&sbquo; ${PL_4}&sbquo; ${PL_5}	${EN}	${Pho}	${Sound}
`
}

function code_6(PL_1, PL_2, PL_3, PL_4, PL_5, PL_6, EN, Sound, Pho) {
    return `${EN}	${PL_1}&sbquo; ${PL_2}&sbquo; ${PL_3}&sbquo; ${PL_4}&sbquo; ${PL_5}&sbquo; ${PL_6}	${EN}	${Pho}	${Sound}
    sound: ${Sound}	${PL_1}&sbquo; ${PL_2}&sbquo; ${PL_3}&sbquo; ${PL_4}&sbquo; ${PL_5}&sbquo; ${PL_6}	${EN}	${Pho}	${Sound}
`
}
function code_6_pl(PL_1, PL_2, PL_3, PL_4, PL_5, PL_6, EN, Sound, Pho) {
    return `${PL_1}&sbquo; ${PL_2}&sbquo; ${PL_3}&sbquo; ${PL_4}&sbquo; ${PL_5}&sbquo; ${PL_6}	${PL_1}&sbquo; ${PL_2}&sbquo; ${PL_3}&sbquo; ${PL_4}&sbquo; ${PL_5}&sbquo; ${PL_6}	${EN}	${Pho}	${Sound}
`
}

function reset() {
        $('.input_text #polish_name_1_inpt').val("");
        $('.input_text #polish_name_2_inpt').val("");
        $('.input_text #polish_name_3_inpt').val("");
        $('.input_text #polish_name_4_inpt').val("");
        $('.input_text #polish_name_5_inpt').val("");
        $('.input_text #polish_name_6_inpt').val("");
        $('.input_text #english_name_inpt').val("");
        $('.input_text #english_phonetics').val("");
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