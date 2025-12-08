class PomodoroTimer {
    constructor() {
        this.timeLeft = 25 * 60;
        this.totalTime = 25 * 60;
        this.timerId = null;
        this.isRunning = false;
        this.mode = 'focus'; 
        this.focusLaps = 0;
        this.breakLaps = 0;

        this.quotes = [
            "Productivity is being able to do things that you were never able to do before.",
            "The only way to do great work is to love what you do.",
            "It’s not exactly about time, it’s about power.",
            "You miss 100% of the shots you don't take.",
            "Focus on being productive instead of busy.",
            "Amateurs sit and wait for inspiration, the rest of us just get up and go to work.",
            "Simplicity is the soul of efficiency.",
            "Don't count the days, make the days count."
        ];

        
        this.timeDisplay = document.getElementById('time-display');
        this.startPauseBtn = document.getElementById('start-pause');
        this.resetBtn = document.getElementById('reset');
        this.skipBtn = document.getElementById('skip');
        this.focusBtn = document.getElementById('focus-btn');
        this.breakBtn = document.getElementById('break-btn');
        this.focusInput = document.getElementById('focus-time');
        this.breakInput = document.getElementById('break-time');
        this.progressRing = document.querySelector('.progress-ring');
        this.quoteDisplay = document.getElementById('quote-display');
        this.focusLapsDisplay = document.getElementById('focus-laps');
        this.breakLapsDisplay = document.getElementById('break-laps');

        this.circumference = 2 * Math.PI * 140; // r=140
        this.progressRing.style.strokeDasharray = `${this.circumference} ${this.circumference}`;

        // Event Listeners
        this.startPauseBtn.addEventListener('click', () => this.toggleTimer());
        this.resetBtn.addEventListener('click', () => this.resetTimer());
        this.skipBtn.addEventListener('click', () => this.skipTimer());
        this.focusBtn.addEventListener('click', () => this.switchMode('focus'));
        this.breakBtn.addEventListener('click', () => this.switchMode('break'));
        this.focusInput.addEventListener('change', () => this.updateSettings());
        this.breakInput.addEventListener('change', () => this.updateSettings());

        this.updateDisplay();
        this.updateQuote();
    }

    toggleTimer() {
        if (this.isRunning) {
            this.pauseTimer();
        } else {
            this.startTimer();
        }
    }

    startTimer() {
        if (this.timerId) return;

        this.isRunning = true;
        this.startPauseBtn.innerHTML = '<span class="icon">⏸</span> Pause';
        this.lockInputs(true); 

        if (this.mode === 'focus') {
            this.lockInputs(true);
        }

        this.timerId = setInterval(() => {
            this.timeLeft--;
            this.updateDisplay();
            this.updateProgress();

            if (this.timeLeft <= 0) {
                this.timerFinished();
            }
        }, 1000);
    }

    pauseTimer() {
        this.isRunning = false;
        clearInterval(this.timerId);
        this.timerId = null;
        this.startPauseBtn.innerHTML = '<span class="icon">▶</span> Start';

    resetTimer() {
        this.pauseTimer();
        const minutes = this.mode === 'focus' ? this.focusInput.value : this.breakInput.value;
        this.timeLeft = minutes * 60;
        this.totalTime = this.timeLeft;
        this.updateDisplay();
        this.updateProgress();
        this.lockInputs(false); // Unlock on reset
    }

    skipTimer() {
        // Skip current session
        this.pauseTimer();
        this.timerFinished();
    }

    switchMode(newMode) {
        this.mode = newMode;
        document.body.classList.toggle('break-mode', newMode === 'break');

        // Update active buttons
        if (newMode === 'focus') {
            this.focusBtn.classList.add('active');
            this.breakBtn.classList.remove('active');
        } else {
            this.focusBtn.classList.remove('active');
            this.breakBtn.classList.add('active');
        }

        this.resetTimer();
    }

    updateSettings() {
        if (!this.isRunning) {
            const minutes = this.mode === 'focus' ? this.focusInput.value : this.breakInput.value;
            this.timeLeft = minutes * 60;
            this.totalTime = this.timeLeft;
            this.updateDisplay();
            this.updateProgress();
        }
    }

    lockInputs(locked) {
        this.focusInput.disabled = locked;
        this.breakInput.disabled = locked;
    }

    updateDisplay() {
        let minutes = Math.floor(this.timeLeft / 60);
        let seconds = this.timeLeft % 60;

        // Prevent negative
        if (minutes < 0) minutes = 0;
        if (seconds < 0) seconds = 0;

        const displayString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        this.timeDisplay.textContent = displayString;
        document.title = `${displayString} - Pomodoro`;
    }

    updateProgress() {
        const offset = this.circumference - (this.timeLeft / this.totalTime) * this.circumference;
        this.progressRing.style.strokeDashoffset = offset;
    }

    timerFinished() {
        this.pauseTimer();

        // Play Sound
        const audio = new Audio('https://actions.google.com/sounds/v1/alarms/beep_short.ogg');
        audio.play().catch(e => console.log('Audio autoplay blocked', e));

        if (this.mode === 'focus') {
            // Focus finished
            this.focusLaps++;
            this.focusLapsDisplay.textContent = this.focusLaps;
            this.updateQuote();

            // Speak "Break Time"
            this.speak("Break time");

            // Auto-start break
            this.switchMode('break');
            this.startTimer();

        } else {
            
            this.breakLaps++;
            this.breakLapsDisplay.textContent = this.breakLaps;

            alert('Break is over! Back to work.');
            this.switchMode('focus');
        }
    }

    updateQuote() {
        const totalLaps = this.focusLaps + this.breakLaps;
        const quoteIndex = totalLaps % this.quotes.length;
        this.quoteDisplay.textContent = `"${this.quotes[quoteIndex]}"`;
        this.quoteDisplay.style.opacity = 0;
        setTimeout(() => this.quoteDisplay.style.opacity = 1, 100); // Fade in effect if we had transition
    }

    speak(text) {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(utterance);
        }
    }
}

// Initialize
const app = new PomodoroTimer();
