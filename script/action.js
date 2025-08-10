class Action {
  selectors = {
    root: '[data-js-blog-action-body]',
    actionButton: '[data-js-blog-action-button]', 
  };
  
  stateClasses = {
    isActive: 'is-active',
  };

  constructor() {
    this.rootElements = document.querySelectorAll(this.selectors.root); 
    this.init();
  }

  init() {
    this.rootElements.forEach(rootElement => {
      const actionButtons = rootElement.querySelectorAll(this.selectors.actionButton);
      
      actionButtons.forEach(button => {
        button.addEventListener('click', this.onActionButtonClick);
      });
    });
  }

  onActionButtonClick = (event) => {
    event.currentTarget.classList.toggle(this.stateClasses.isActive);
  };
}

export default Action;