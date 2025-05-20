//侧边栏切换函数
function toggleSidebar() {
  var sidebar = document.getElementById("sidebar");
  var toggleButton = document.getElementById("toggleSidebarButton");

  if (sidebar.style.display === "none") {
    sidebar.style.display = "flex";
    toggleButton.innerHTML = "≡";
  } else {
    sidebar.style.display = "none";
    toggleButton.innerHTML = "≡";
  }
}

//窗口大小改变时触发的函数
window.addEventListener("resize", function () {
  var sidebar = document.getElementById("sidebar");
  if (window.innerWidth < 960) {
    sidebar.style.display = "none";
    document.getElementById("toggleSidebarButton").style.display = "block";
  } else {
    sidebar.style.display = "flex";
    document.getElementById("toggleSidebarButton").style.display = "none";
  }
});

// 初始加载时检查窗口大小
window.addEventListener("load", function () {
  window.dispatchEvent(new Event("resize"));
});
// 图片切换函数
function toggleImage(imageSrc) {
  var contentArea = document.getElementById("contentArea");
  var imgTag = `<img src="./${imageSrc}" style="max-width: 50%; max-height: 50%; width: auto; height: auto;" />`;

  // 如果当前内容是图片，并且点击的图片与当前显示的图片相同，则隐藏图片并恢复默认内容
  if (contentArea.innerHTML.includes("<img")) {
    var currentImgSrc = contentArea.querySelector("img").getAttribute("src");
    if (currentImgSrc === `./${imageSrc}`) {
      contentArea.innerHTML = `
                <button class="button" onclick="addContentRow()">
                    <p>略略略~</p>
                </button>`;
    } else {
      // 如果点击的图片与当前显示的图片不同，则替换为新图片
      contentArea.innerHTML = imgTag;
    }
  } else {
    // 如果当前内容不是图片，则替换为图片
    contentArea.innerHTML = imgTag;
  }
}

// 内容滚动函数
const paragraphs = [
  "这是第一行内容",
  "嘿嘿！",
  "都说了没有！",
  "真的没有了！",
  "没骗你!",
  "真的！",
  "你怎么还在！",
  "WOC!",
  "真没有内容了！",
  "啊~~~",
  "你咋这么掘呢！",
  "好好好，你赢了！",
  "哎~难以启齿。。。",
  "嗯~~~",
  "520快乐哇!",
  "你不会是一个人过吧!",
  "真可怜~略略略~",
];

let currentParagraphCount = 0;

function addContentRow() {
  if (currentParagraphCount < paragraphs.length) {
    const contentArea = document.getElementById("contentArea");
    const newParagraph = document.createElement("p");
    newParagraph.textContent = paragraphs[currentParagraphCount];
    contentArea.appendChild(newParagraph);
    currentParagraphCount++;
  }
}
