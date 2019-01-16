# What I've learned

## SpeechSynthesis
scripted web API for controlling a text-to-speech output.

`SpeechSynthesisUtterance` represents a speech request. 
It contains the content(msg) the speech service should read and information about how to read it (e.g. language, pitch and volume.)

How to use it:

1. Grab a reference to the SpeechSynthesis controller using window.speechSynthesis. 
2. Retrieve a list of the voices available using SpeechSynthesis.getVoices() 
3. Populate a select menu with voices so the user can choose what voice they want.
4. Create a new utterance instance containing the text from the text <input>
5. Set the utterance's voice to the voice selected in the <select> element
6. Start the utterance speaking via the SpeechSynthesis.speak() method.

## Events:

*voiceschanged*
fired when the list of SpeechSynthesisVoice objects that would be returned by the SpeechSynthesis.getVoices() method has changed (when the voiceschanged event fires.)
Examples include: server-side synthesis where the list is determined asynchronously, or when client-side voices are installed/uninstalled.


## Binding functions with passing arguments to it

stopButton.addEventListener('click', () => restartVoice(false));

= will create a function each time

//long but working
stopButton.addEventListener('click', function (){
    restartVoice(false)
});

// works only on page load
stopButton.addEventListener('click', restartVoice(false));

with bind:  passing the context of this and first argument of function
stopButton.addEventListener('click', restartVoice.bind(null, false));