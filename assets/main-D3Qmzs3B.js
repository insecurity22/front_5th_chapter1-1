(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();const d=()=>`
  <main class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full text-center" style="max-width: 480px">
      <h1 class="text-2xl font-bold text-blue-600 mb-4">항해플러스</h1>
      <p class="text-4xl font-bold text-gray-800 mb-4">404</p>
      <p class="text-xl text-gray-600 mb-8">페이지를 찾을 수 없습니다</p>
      <p class="text-gray-600 mb-8">
        요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
      </p>
      <a href="/" class="bg-blue-600 text-white px-4 py-2 rounded font-bold">
        홈으로 돌아가기
      </a>
    </div>
  </main>
`,c=()=>`
<footer class="bg-gray-200 p-4 text-center">
  <p>&copy; 2024 항해플러스. All rights reserved.</p>
</footer>
`,u=()=>{const t=l.getAuth(),e=o=>l.getCurrentPath()===o?"font-bold text-blue-600":"text-gray-600";return` 
    <header class="bg-blue-600 text-white p-4 sticky top-0">
      <h1 class="text-2xl font-bold">항해플러스</h1>
    </header>

    <nav class="bg-white shadow-md p-2 sticky top-14">
      <ul class="flex justify-around [&_li]:text-gray-600">
        <li><a href="/" class="${e("/")}">홈</a></li>
        <li><a href="/profile" class="${e("/profile")}">프로필</a></li>
        <li>
          <a href="/login"
            ${t?' id="logout">로그아웃':` class="${e("/login")}">로그인`}
          </a>
        </li>
      </ul>
    </nav>
  `},b=({children:t})=>`
      <div class="bg-gray-100 min-h-screen flex justify-center">
        <div class="max-w-md w-full">
          ${u()}
          ${t}
          ${c()}
        </div>
      </div>
  `,m=()=>`
  <main class="p-4">
    <div class="mb-4 bg-white rounded-lg shadow p-4">
      <textarea class="w-full p-2 border rounded" placeholder="무슨 생각을 하고 계신가요?"></textarea>
      <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">게시</button>
    </div>

    <div class="space-y-4">

      <div class="bg-white rounded-lg shadow p-4">
        <div class="flex items-center mb-2">
          <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
          <div>
            <p class="font-bold">홍길동</p>
            <p class="text-sm text-gray-500">5분 전</p>
          </div>
        </div>
        <p>오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!</p>
        <div class="mt-2 flex justify-between text-gray-500">
          <button>좋아요</button>
          <button>댓글</button>
          <button>공유</button>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow p-4">
        <div class="flex items-center mb-2">
          <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
          <div>
            <p class="font-bold">김철수</p>
            <p class="text-sm text-gray-500">15분 전</p>
          </div>
        </div>
        <p>새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!</p>
        <div class="mt-2 flex justify-between text-gray-500">
          <button>좋아요</button>
          <button>댓글</button>
          <button>공유</button>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow p-4">
        <div class="flex items-center mb-2">
          <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
          <div>
            <p class="font-bold">이영희</p>
            <p class="text-sm text-gray-500">30분 전</p>
          </div>
        </div>
        <p>오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?</p>
        <div class="mt-2 flex justify-between text-gray-500">
          <button>좋아요</button>
          <button>댓글</button>
          <button>공유</button>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow p-4">
        <div class="flex items-center mb-2">
          <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
          <div>
            <p class="font-bold">박민수</p>
            <p class="text-sm text-gray-500">1시간 전</p>
          </div>
        </div>
        <p>주말에 등산 가실 분 계신가요? 함께 가요!</p>
        <div class="mt-2 flex justify-between text-gray-500">
          <button>좋아요</button>
          <button>댓글</button>
          <button>공유</button>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow p-4">
        <div class="flex items-center mb-2">
          <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
          <div>
            <p class="font-bold">정수연</p>
            <p class="text-sm text-gray-500">2시간 전</p>
          </div>
        </div>
        <p>새로 나온 영화 재미있대요. 같이 보러 갈 사람?</p>
        <div class="mt-2 flex justify-between text-gray-500">
          <button>좋아요</button>
          <button>댓글</button>
          <button>공유</button>
        </div>
      </div>
    </div>
  </main>
`,f=()=>`
  <main class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 class="text-2xl font-bold text-center text-blue-600 mb-8">항해플러스</h1>
      <form id="login-form">
        <div class="mb-4">
          <input id="username" name="username" type="text" placeholder="사용자 이름" class="w-full p-2 border rounded" required>
        </div>
        <div class="mb-6">
          <input id="password" type="password" placeholder="비밀번호" class="w-full p-2 border rounded" required>
        </div>
        <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded font-bold">로그인</button>
      </form>
      <div class="mt-4 text-center">
        <a href="#" class="text-blue-600 text-sm">비밀번호를 잊으셨나요?</a>
      </div>
      <hr class="my-6">
      <div class="text-center">
        <button class="bg-green-500 text-white px-4 py-2 rounded font-bold">새 계정 만들기</button>
      </div>
    </div>
  </main>
`,g=()=>{const t=l.getAuth();return`
    <main class="p-4">
      <div class="bg-white p-8 rounded-lg shadow-md">
        <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">
          내 프로필
        </h2>
        <form id="profile-form">
          <div class="mb-4">
            <label
              for="username"
              class="block text-gray-700 text-sm font-bold mb-2"
            >
              사용자 이름
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value="${(t==null?void 0:t.username)||""}"
              class="w-full p-2 border rounded"
            />
          </div>
          <div class="mb-4">
            <label
              for="email"
              class="block text-gray-700 text-sm font-bold mb-2"
            >
              이메일
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value="${(t==null?void 0:t.email)||""}"
              class="w-full p-2 border rounded"
            />
          </div>
          <div class="mb-6">
            <label for="bio" class="block text-gray-700 text-sm font-bold mb-2">
              자기소개
            </label>
            <textarea
              id="bio"
              name="bio"
              rows="4"
              class="w-full p-2 border rounded"
            >
              ${(t==null?void 0:t.bio)||""}
            </textarea>
          </div>
          <button
            type="submit"
            class="w-full bg-blue-600 text-white p-2 rounded font-bold"
          >
            프로필 업데이트
          </button>
        </form>
      </div>
    </main>
  `},h=t=>JSON.parse(localStorage.getItem(t)),a=(t,e)=>localStorage.setItem(t,JSON.stringify(e)),p=t=>localStorage.removeItem(t),l={routes:{"/":m,"/login":f,"/profile":g},init({onClick:t,onSubmit:e}){addEventListener("click",t),addEventListener("submit",e),addEventListener("popstate",this.render.bind(this)),addEventListener("hashchange",this.render.bind(this)),this.render()},routeGuard(){const t=this.getAuth(),e=this.getCurrentPath();return!t&&e.includes("profile")?this.navigate("/login"):t&&e.includes("login")?this.navigate("/"):!0},getComponent(t){const e=this.routes[t],o=t.includes("login");return!e||o?(this.routes[t]||d)():b({children:this.routes[t]()})},render(){if(!this.routeGuard())return;const e=this.removeBasePath(this.getCurrentPath()),o=this.getComponent(e);document.body.innerHTML=`<div id="root">${o}</div>`},navigate(t,e=t==null?void 0:t.startsWith("#")){var i;let o=t;if(e)location.hash=o;else{const s=(i=this.getBasePath())==null?void 0:i.replace(/\/$/,"");t.includes(s)||(o=s+t),history.pushState(null,"",o)}this.render()},getAuth(){return h("user")},clearAuth(){return p("user")},getBasePath(){return"/front_5th_chapter1-1/"},removeBasePath(t){return t==null?void 0:t.replace(this.getBasePath(),"/")},getCurrentPath(){var e;return location.hash?this.removeBasePath((e=location.hash)==null?void 0:e.slice(1)):this.removeBasePath(location.pathname)}},v=t=>{const{target:e}=t,{id:o,tagName:i,href:s,pathname:r}=e;if(o==="logout"&&l.clearAuth(),i==="BUTTON")return;i==="A"&&s&&(t.preventDefault(),(s==null?void 0:s.includes("#"))?l.navigate(s):l.navigate(r))},x=t=>{var i,s,r,n;const e=(s=(i=document.getElementById("email"))==null?void 0:i.value)==null?void 0:s.trim(),o=(n=(r=document.getElementById("bio"))==null?void 0:r.value)==null?void 0:n.trim();a("user",{username:t,email:e,bio:o}),alert("프로필이 업데이트 되었습니다.")},y=t=>{var o,i;const e=(i=(o=document.getElementById("username"))==null?void 0:o.value)==null?void 0:i.trim();e&&(t.preventDefault(),t.target.id==="login-form"&&(a("user",{username:e,email:"",bio:""}),l.navigate("/")),t.target.id==="profile-form"&&x(e))};l.init({onClick:v,onSubmit:y});
