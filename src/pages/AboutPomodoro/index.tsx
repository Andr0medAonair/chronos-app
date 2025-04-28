import { Container } from '../../components/Container';
import { GenericHtml } from '../../components/GenericHtml';
import { Heading } from '../../components/Heading';
import { RouterLink } from '../../components/RouterLink';
import { MainTemplate } from '../../templates/MainTemplate';

export function AboutPomodoro() {
  return (
    <MainTemplate>
      <Container>
        <GenericHtml>
          <Heading>A Técnica Pomodoro 🍅</Heading>

          <p>
            The Pomodoro Technique is a productivity methodology created by
            <strong>Francesco Cirillo</strong>, which involves breaking work
            into time blocks (the famous "Pomodoros") interspersed with breaks.
            The goal is to maintain full focus for a short period and ensure
            rest periods to avoid mental fatigue.
          </p>

          <h2>How does the traditional Pomodoro work?</h2>
          <ul>
            <li>
              <strong>1. Choose a task</strong> you want to accomplish.
            </li>
            <li>
              <strong>2. Work on it for 25 minutes</strong> without
              interruptions.
            </li>
            <li>
              <strong>3. Take a short 5-minute break</strong>.
            </li>
            <li>
              <strong>4. After 4 cycles, take a longer break</strong>
              (usually 15 to 30 minutes).
            </li>
          </ul>

          <h2>
            But <strong>Chronos Pomodoro</strong> has a special twist 🚀
          </h2>

          <p>
            Our app follows the original concept but with some improvements and
            customizations to make the process even more efficient:
          </p>

          <h3>⚙️ Time customization</h3>
          <p>
            You can configure the focus time, short break, and long break
            however you like! Just go to the
            <RouterLink href='/settings/'>settings page</RouterLink> and adjust
            the minutes as you prefer.
          </p>

          <h3>🔁 Cycles organized in sequence</h3>
          <p>
            With each completed cycle, a new task is automatically added to your
            history, and the app already suggests the next cycle (focus or
            break).
          </p>
          <p>
            <strong>Our default pattern:</strong>
          </p>
          <ul>
            <li>
              <strong>Odd cycles</strong>: Work (focus).
            </li>
            <li>
              <strong>Even cycles</strong>: Short break.
            </li>
            <li>
              <strong>Cycle 8</strong>: Special long break to reset the full
              cycle.
            </li>
          </ul>

          <h3>🍅 Cycle visualization</h3>
          <p>
            Just below the timer, you will see colored dots representing the
            cycles:
          </p>
          <ul>
            <li>🟡 Yellow: Work cycle (focus).</li>
            <li>🟢 Green: Short break.</li>
            <li>🔵 Blue: Long break (appears every 8 cycles).</li>
          </ul>

          <p>
            This way, you always know which part of the process you're in and
            what’s coming next. No need to write it down on paper or keep
            calculating in your head!
          </p>

          <h3>📊 Automatic history</h3>
          <p>
            All your completed tasks and cycles are saved in the
            <RouterLink href='/history/'>history</RouterLink>, with statuses as
            either completed or interrupted. This way, you can track your
            progress over time.
          </p>

          <h2>Why use Chronos Pomodoro?</h2>
          <ul>
            <li>✅ Organize your focus clearly.</li>
            <li>✅ Work and rest in the right measure.</li>
            <li>✅ Customize your own cycles and times.</li>
            <li>✅ Automatically track your history.</li>
          </ul>

          <p>
            <strong>Ready to focus?</strong> Let's
            <RouterLink href='/'>go back to the home page</RouterLink>
            and start your Pomodoros! 🍅🚀
          </p>

          <p>
            <em>"Full focus, no rush, no pause — just go!"</em> 💪🧘‍♂️
          </p>
        </GenericHtml>
      </Container>
    </MainTemplate>
  );
}
