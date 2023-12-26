type QuestionNode = {
  name: string;
  question: string;
  children: Array<QuestionNode | string>;
};
class DiscoveryPilot {
  private currentQuestion: QuestionNode;
  private container: HTMLElement;
  private questionHistory: QuestionNode[] = [];

  constructor(containerId: string, questions: QuestionNode) {
    const containerElement = document.getElementById(containerId);
    if (!containerElement) {
      throw new Error(`Element with id '${containerId}' not found.`);
    }
    this.container = containerElement;
    this.currentQuestion = questions;
    this.displayQuestion();
  }

  private displayQuestion(): void {
    this.container.innerHTML = `<h2 class="dp-question-title">${this.currentQuestion.question}</h2>`;

    const list = document.createElement("ul");
    list.className = "dp-question-list";
    this.currentQuestion.children.forEach((child) => {
      const listItem = document.createElement("li");
      listItem.className = "dp-question-item";

      if (typeof child === "string") {
        // リンクの場合
        const link = document.createElement("a");
        link.href = child;
        link.target = "_blank";
        link.innerHTML = child;
        listItem.appendChild(link);
      } else {
        // 通常の質問項目の場合
        listItem.innerHTML = child.name;
        listItem.addEventListener("click", () => {
          this.questionHistory.push(this.currentQuestion);
          this.currentQuestion = child;
          this.displayQuestion();
        });
      }
      list.appendChild(listItem);
    });
    this.container.appendChild(list);

    if (this.questionHistory.length > 0) {
      this.addBackButton();
    }
  }

  private addBackButton(): void {
    const backButton = document.createElement("button");
    backButton.className = "dp-back-button";
    backButton.textContent = "戻る";
    backButton.onclick = () => {
      this.currentQuestion = this.questionHistory.pop()!;
      this.displayQuestion();
    };
    this.container.appendChild(backButton);
  }
}
