import './Logo.css';
/* https://codepen.io/AlexWarnes/pen/jXYYKL */

const nameClasses = 'name-text text-xl font-semibold';

function Logo() {
  return (
    <div>
      <div class='relative spinner-box'>
        <div class='name-container z-10'>
          <p class={nameClasses}>Max</p>
          <p class={nameClasses}>Ohsawa</p>
        </div>

        <div class='leo-border-2'>
          <div class='leo-core-2'></div>
        </div>

        <div class='leo-border-4'>
          <div class='leo-core-4'></div>
        </div>
        <div class='leo-border-5'>
          <div class='leo-core-5'></div>
        </div>
      </div>
    </div>
  );
}

export default Logo;
