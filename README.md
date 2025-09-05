# 🛒 Supabase + React 쇼핑몰 과제

## 📋 과제 개요

Supabase를 활용하여 React로 간단한 쇼핑몰과 장바구니 기능을 구현합니다.

## 🎯 학습 목표

- React 기본 문법 활용
- Supabase DB 연동 및 기본 문법 사용
- 쇼핑몰 핵심 기능 구현

## 🚀 시작하기

### 1. 설치 및 실행

```bash
git clone https://github.com/Leekwanyong/oz-db-requirements.git
cd oz-db-requirements
npm install
npm run dev
```

### 2. Supabase 설정

1. [Supabase](https://supabase.com)에서 새 프로젝트 생성
2. SQL Editor에서 아래 코드 실행:

```sql
-- 테이블 생성
CREATE TABLE categories (id SERIAL PRIMARY KEY, name VARCHAR(50) UNIQUE);
CREATE TABLE brands (id SERIAL PRIMARY KEY, name VARCHAR(50) UNIQUE);
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(200),
    price INTEGER,
    category_id INTEGER REFERENCES categories(id),
    brand_id INTEGER REFERENCES brands(id),
    stock INTEGER DEFAULT 10,
    image_url TEXT
);
CREATE TABLE users (id SERIAL PRIMARY KEY, name VARCHAR(100));
CREATE TABLE cart (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    product_id INTEGER REFERENCES products(id),
    quantity INTEGER DEFAULT 1
);

-- RLS 비활성화
ALTER TABLE categories DISABLE ROW LEVEL SECURITY;
ALTER TABLE brands DISABLE ROW LEVEL SECURITY;
ALTER TABLE products DISABLE ROW LEVEL SECURITY;
ALTER TABLE cart DISABLE ROW LEVEL SECURITY;
ALTER TABLE users DISABLE ROW LEVEL SECURITY;

-- 샘플 데이터
INSERT INTO categories (name) VALUES ('전자제품'), ('패션'), ('생활용품');
INSERT INTO brands (name) VALUES ('애플'), ('삼성'), ('나이키'), ('아디다스');
INSERT INTO products (name, price, category_id, brand_id, image_url) VALUES
('iPhone 15', 1200000, 1, 1, 'https://picsum.photos/400/300?random=1'),
('갤럭시 S24', 1000000, 1, 2, 'https://picsum.photos/400/300?random=2'),
('맥북 프로', 2500000, 1, 1, 'https://picsum.photos/400/300?random=3'),
('나이키 운동화', 150000, 2, 3, 'https://picsum.photos/400/300?random=6');
INSERT INTO users (name) VALUES ('테스트 사용자');
```

### 3. 환경변수 설정

`.env` 파일 생성:

```env
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

## 🏗️ 구현 기능

- ✅ 상품 목록 표시
- ✅ 장바구니 추가/삭제/수량변경
- ✅ 이미지 지연 로딩
- ✅ React 최적화 (memo, lazy)

## 📁 주요 파일

```
src/
├── components/     # 컴포넌트
├── hooks/         # 커스텀 훅
├── pages/         # 페이지
├── supabase/      # DB 연결
└── App.js         # 라우팅
```

## 🔗 참고 링크

- **힌트 코드**: [현재 저장소](https://github.com/Leekwanyong/oz-db-requirements)
- **완성 예시**: [정답 코드](https://github.com/Leekwanyong/oz-db)
