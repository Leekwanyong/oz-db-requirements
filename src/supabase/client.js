import { createClient } from "@supabase/supabase-js";
// .gitignore에 .env를 추가해주세요 꼭! 중요
// 환경변수에서 Supabase 연결에 필요한 정보들을 가져와주세요
// .env 파일에 설정된 URL과 키를 import.meta.env를 통해 접근해보세요
const supabaseUrl = // Supabase 프로젝트 URL을 환경변수에서 가져와주세요
const supabaseKey = // Supabase Anonymous Key를 환경변수에서 가져와주세요

// Supabase 클라이언트를 생성하고 내보내기해주세요
// createClient 함수에 필요한 매개변수들을 전달해주세요
export const supabase =