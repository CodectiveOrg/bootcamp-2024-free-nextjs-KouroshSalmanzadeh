import { CommentModel } from "@/models/comment.model";


export const comments: CommentModel[] = [
    {
        id: 1,
        name: "سارا احمدی",
        relId: 1,
        text: "ایشون جزو بهترین دکتر هایی هستند که تا به حال دیدم و واقعن از پذیرش شون راضی بودم",
        createdDay: 1,
        likes: 5,
        doctorRate: 4.9,
        Related: false
    },
    {
        id: 2,
        name: "محمد رضایی",
        relId: 1,
        text: "دکتر بسیار حرفه‌ای و با تجربه‌ای هستند. از مشاوره‌اشون بسیار راضی بودم.",
        createdDay: 2,
        likes: 3,
        doctorRate: 4.8,
        Related: true
    },
    {
        id: 3,
        name: "فاطمه محمدی",
        relId: 1,
        text: "تجربه‌ی بسیار خوبی بود. دکتر بسیار صبور و دلسوز هستند.",
        createdDay: 3,
        likes: 7,
        doctorRate: 5.0,
        Related: false
    },
    {
        id: 4,
        name: "علی حسینی",
        relId: 1,
        text: "از نحوه‌ی برخورد و درمان دکتر بسیار راضی بودم. توصیه می‌کنم.",
        createdDay: 5,
        likes: 2,
        doctorRate: 4.7,
        Related: true
    },
    {
        id: 5,
        name: "زهرا کریمی",
        relId: 2,
        text: "دکتر بسیار خوش برخورد و حرفه‌ای هستند. از مشاوره‌اشون بسیار راضی بودم.",
        createdDay: 1,
        likes: 4,
        doctorRate: 4.9,
        Related: false
    },
    {
        id: 6,
        name: "رضا علیزاده",
        relId: 2,
        text: "تجربه‌ی بسیار خوبی بود. دکتر بسیار صبور و دلسوز هستند.",
        createdDay: 2,
        likes: 6,
        doctorRate: 4.8,
        Related: true
    },
    {
        id: 7,
        name: "نازنین صفری",
        relId: 2,
        text: "ایشون جزو بهترین دکتر هایی هستند که تا به حال دیدم و واقعن از پذیرش شون راضی بودم",
        createdDay: 3,
        likes: 8,
        doctorRate: 5.0,
        Related: false
    },
    {
        id: 8,
        name: "مجید محمودی",
        relId: 2,
        text: "از نحوه‌ی برخورد و درمان دکتر بسیار راضی بودم. توصیه می‌کنم.",
        createdDay: 5,
        likes: 3,
        doctorRate: 4.7,
        Related: true
    },
    {
        id: 9,
        name: "لیلا رضایی",
        relId: 3,
        text: "دکتر بسیار خوش برخورد و حرفه‌ای هستند. از مشاوره‌اشون بسیار راضی بودم.",
        createdDay: 1,
        likes: 5,
        doctorRate: 4.9,
        Related: false
    },
    {
        id: 10,
        name: "حسین محمدی",
        relId: 3,
        text: "تجربه‌ی بسیار خوبی بود. دکتر بسیار صبور و دلسوز هستند.",
        createdDay: 2,
        likes: 7,
        doctorRate: 4.8,
        Related: true
    },
    {
        id: 11,
        name: "مریم حسینی",
        relId: 3,
        text: "ایشون جزو بهترین دکتر هایی هستند که تا به حال دیدم و واقعن از پذیرش شون راضی بودم",
        createdDay: 3,
        likes: 9,
        doctorRate: 5.0,
        Related: false
    },
    {
        id: 12,
        name: "احمد کریمی",
        relId: 3,
        text: "از نحوه‌ی برخورد و درمان دکتر بسیار راضی بودم. توصیه می‌کنم.",
        createdDay: 5,
        likes: 4,
        doctorRate: 4.7,
        Related: true
    },
    {
        id: 13,
        name: "زهرا رضایی",
        relId: 4,
        text: "دکتر بسیار خوش برخورد و حرفه‌ای هستند. از مشاوره‌اشون بسیار راضی بودم.",
        createdDay: 1,
        likes: 6,
        doctorRate: 4.9,
        Related: false
    },
    {
        id: 14,
        name: "محسن علیزاده",
        relId: 4,
        text: "تجربه‌ی بسیار خوبی بود. دکتر بسیار صبور و دلسوز هستند.",
        createdDay: 2,
        likes: 8,
        doctorRate: 4.8,
        Related: true
    },
    {
        id: 15,
        name: "نرگس صفری",
        relId: 4,
        text: "ایشون جزو بهترین دکتر هایی هستند که تا به حال دیدم و واقعن از پذیرش شون راضی بودم",
        createdDay: 3,
        likes: 10,
        doctorRate: 5.0,
        Related: false
    },
    {
        id: 16,
        name: "مهدی محمودی",
        relId: 4,
        text: "از نحوه‌ی برخورد و درمان دکتر بسیار راضی بودم. توصیه می‌کنم.",
        createdDay: 5,
        likes: 5,
        doctorRate: 4.7,
        Related: true
    },
    {
        id: 17,
        name: "سارا رضایی",
        relId: 5,
        text: "دکتر بسیار دلسوز و حرفه‌ای هستند. از مشاوره‌اشون بسیار راضی بودم.",
        createdDay: 1,
        likes: 6,
        doctorRate: 4.9,
        Related: true
    },
    {
        id: 18,
        name: "محمد حسینی",
        relId: 5,
        text: "تجربه‌ی بسیار خوبی بود. دکتر بسیار صبور و با حوصله هستند.",
        createdDay: 2,
        likes: 7,
        doctorRate: 4.8,
        Related: false
    },
    {
        id: 19,
        name: "فاطمه کریمی",
        relId: 5,
        text: "ایشون واقعاً بهترین دکتری هستند که تا به حال دیده‌ام. بسیار راضی بودم.",
        createdDay: 3,
        likes: 8,
        doctorRate: 5.0,
        Related: true
    },
    {
        id: 20,
        name: "علی محمودی",
        relId: 5,
        text: "از نحوه‌ی برخورد و درمان دکتر بسیار راضی بودم. توصیه می‌کنم.",
        createdDay: 5,
        likes: 4,
        doctorRate: 4.7,
        Related: false
    },
    {
        id: 21,
        name: "زهرا علیزاده",
        relId: 6,
        text: "دکتر بسیار خوش برخورد و حرفه‌ای هستند. از مشاوره‌اشون بسیار راضی بودم.",
        createdDay: 1,
        likes: 5,
        doctorRate: 4.9,
        Related: true
    },
    {
        id: 22,
        name: "رضا صفری",
        relId: 6,
        text: "تجربه‌ی بسیار خوبی بود. دکتر بسیار صبور و دلسوز هستند.",
        createdDay: 2,
        likes: 6,
        doctorRate: 4.8,
        Related: false
    },
    {
        id: 23,
        name: "نازنین رضایی",
        relId: 6,
        text: "ایشون جزو بهترین دکتر هایی هستند که تا به حال دیدم و واقعن از پذیرش شون راضی بودم",
        createdDay: 3,
        likes: 7,
        doctorRate: 5.0,
        Related: true
    },
    {
        id: 24,
        name: "مجید محمدی",
        relId: 6,
        text: "از نحوه‌ی برخورد و درمان دکتر بسیار راضی بودم. توصیه می‌کنم.",
        createdDay: 5,
        likes: 3,
        doctorRate: 4.7,
        Related: false
    },
    {
        id: 25,
        name: "لیلا حسینی",
        relId: 7,
        text: "دکتر بسیار خوش برخورد و حرفه‌ای هستند. از مشاوره‌اشون بسیار راضی بودم.",
        createdDay: 1,
        likes: 4,
        doctorRate: 4.9,
        Related: true
    },
    {
        id: 26,
        name: "حسین کریمی",
        relId: 7,
        text: "تجربه‌ی بسیار خوبی بود. دکتر بسیار صبور و دلسوز هستند.",
        createdDay: 2,
        likes: 5,
        doctorRate: 4.8,
        Related: false
    },
    {
        id: 27,
        name: "مریم محمودی",
        relId: 7,
        text: "ایشون جزو بهترین دکتر هایی هستند که تا به حال دیدم و واقعن از پذیرش شون راضی بودم",
        createdDay: 3,
        likes: 6,
        doctorRate: 5.0,
        Related: true
    },
    {
        id: 28,
        name: "احمد علیزاده",
        relId: 7,
        text: "از نحوه‌ی برخورد و درمان دکتر بسیار راضی بودم. توصیه می‌کنم.",
        createdDay: 5,
        likes: 2,
        doctorRate: 4.7,
        Related: false
    },
    {
        id: 29,
        name: "زهرا صفری",
        relId: 8,
        text: "دکتر بسیار خوش برخورد و حرفه‌ای هستند. از مشاوره‌اشون بسیار راضی بودم.",
        createdDay: 1,
        likes: 3,
        doctorRate: 4.9,
        Related: true
    },
    {
        id: 30,
        name: "محسن رضایی",
        relId: 8,
        text: "تجربه‌ی بسیار خوبی بود. دکتر بسیار صبور و دلسوز هستند.",
        createdDay: 2,
        likes: 4,
        doctorRate: 4.8,
        Related: false
    },
    {
        id: 31,
        name: "نرگس محمدی",
        relId: 8,
        text: "ایشون جزو بهترین دکتر هایی هستند که تا به حال دیدم و واقعن از پذیرش شون راضی بودم",
        createdDay: 3,
        likes: 5,
        doctorRate: 5.0,
        Related: true
    },
    {
        id: 32,
        name: "مهدی حسینی",
        relId: 8,
        text: "از نحوه‌ی برخورد و درمان دکتر بسیار راضی بودم. توصیه می‌کنم.",
        createdDay: 5,
        likes: 1,
        doctorRate: 4.7,
        Related: false
    },
    {
        id: 33,
        name: "سارا کریمی",
        relId: 9,
        text: "دکتر بسیار دلسوز و حرفه‌ای هستند. از مشاوره‌اشون بسیار راضی بودم.",
        createdDay: 1,
        likes: 6,
        doctorRate: 4.9,
        Related: true
    },
    {
        id: 34,
        name: "محمد محمودی",
        relId: 9,
        text: "تجربه‌ی بسیار خوبی بود. دکتر بسیار صبور و با حوصله هستند.",
        createdDay: 2,
        likes: 7,
        doctorRate: 4.8,
        Related: false
    },
    {
        id: 35,
        name: "فاطمه علیزاده",
        relId: 9,
        text: "ایشون واقعاً بهترین دکتری هستند که تا به حال دیده‌ام. بسیار راضی بودم.",
        createdDay: 3,
        likes: 8,
        doctorRate: 5.0,
        Related: true
    },
    {
        id: 36,
        name: "علی صفری",
        relId: 9,
        text: "از نحوه‌ی برخورد و درمان دکتر بسیار راضی بودم. توصیه می‌کنم.",
        createdDay: 5,
        likes: 4,
        doctorRate: 4.7,
        Related: false
    },
    {
        id: 37,
        name: "زهرا رضایی",
        relId: 10,
        text: "دکتر بسیار خوش برخورد و حرفه‌ای هستند. از مشاوره‌اشون بسیار راضی بودم.",
        createdDay: 1,
        likes: 5,
        doctorRate: 4.9,
        Related: true
    },
    {
        id: 38,
        name: "رضا حسینی",
        relId: 10,
        text: "تجربه‌ی بسیار خوبی بود. دکتر بسیار صبور و دلسوز هستند.",
        createdDay: 2,
        likes: 6,
        doctorRate: 4.8,
        Related: false
    },
    {
        id: 39,
        name: "نازنین کریمی",
        relId: 10,
        text: "ایشون جزو بهترین دکتر هایی هستند که تا به حال دیدم و واقعن از پذیرش شون راضی بودم",
        createdDay: 3,
        likes: 7,
        doctorRate: 5.0,
        Related: true
    },
    {
        id: 40,
        name: "مجید علیزاده",
        relId: 10,
        text: "از نحوه‌ی برخورد و درمان دکتر بسیار راضی بودم. توصیه می‌کنم.",
        createdDay: 5,
        likes: 3,
        doctorRate: 4.7,
        Related: false
    },
    {
        id: 41,
        name: "لیلا محمودی",
        relId: 11,
        text: "دکتر بسیار خوش برخورد و حرفه‌ای هستند. از مشاوره‌اشون بسیار راضی بودم.",
        createdDay: 1,
        likes: 4,
        doctorRate: 4.9,
        Related: true
    },
    {
        id: 42,
        name: "حسین صفری",
        relId: 11,
        text: "تجربه‌ی بسیار خوبی بود. دکتر بسیار صبور و دلسوز هستند.",
        createdDay: 2,
        likes: 5,
        doctorRate: 4.8,
        Related: false
    },
    {
        id: 43,
        name: "مریم رضایی",
        relId: 11,
        text: "ایشون جزو بهترین دکتر هایی هستند که تا به حال دیدم و واقعن از پذیرش شون راضی بودم",
        createdDay: 3,
        likes: 6,
        doctorRate: 5.0,
        Related: true
    },
    {
        id: 44,
        name: "احمد کریمی",
        relId: 11,
        text: "از نحوه‌ی برخورد و درمان دکتر بسیار راضی بودم. توصیه می‌کنم.",
        createdDay: 5,
        likes: 2,
        doctorRate: 4.7,
        Related: false
    },
    {
        id: 45,
        name: "زهرا حسینی",
        relId: 12,
        text: "دکتر بسیار خوش برخورد و حرفه‌ای هستند. از مشاوره‌اشون بسیار راضی بودم.",
        createdDay: 1,
        likes: 3,
        doctorRate: 4.9,
        Related: true
    },
    {
        id: 46,
        name: "محسن علیزاده",
        relId: 12,
        text: "تجربه‌ی بسیار خوبی بود. دکتر بسیار صبور و دلسوز هستند.",
        createdDay: 2,
        likes: 4,
        doctorRate: 4.8,
        Related: false
    },
    {
        id: 47,
        name: "نرگس محمودی",
        relId: 12,
        text: "ایشون جزو بهترین دکتر هایی هستند که تا به حال دیدم و واقعن از پذیرش شون راضی بودم",
        createdDay: 3,
        likes: 5,
        doctorRate: 5.0,
        Related: true
    },
    {
        id: 48,
        name: "مهدی صفری",
        relId: 12,
        text: "از نحوه‌ی برخورد و درمان دکتر بسیار راضی بودم. توصیه می‌کنم.",
        createdDay: 5,
        likes: 1,
        doctorRate: 4.7,
        Related: false
    },
    {
        id: 49,
        name: "سارا رضایی",
        relId: 13,
        text: "دکتر بسیار دلسوز و حرفه‌ای هستند. از مشاوره‌اشون بسیار راضی بودم.",
        createdDay: 1,
        likes: 6,
        doctorRate: 4.9,
        Related: true
    },
    {
        id: 50,
        name: "محمد حسینی",
        relId: 13,
        text: "تجربه‌ی بسیار خوبی بود. دکتر بسیار صبور و با حوصله هستند.",
        createdDay: 2,
        likes: 7,
        doctorRate: 4.8,
        Related: false
    },
    {
        id: 51,
        name: "فاطمه کریمی",
        relId: 13,
        text: "ایشون واقعاً بهترین دکتری هستند که تا به حال دیده‌ام. بسیار راضی بودم.",
        createdDay: 3,
        likes: 8,
        doctorRate: 5.0,
        Related: true
    },
    {
        id: 52,
        name: "علی محمودی",
        relId: 13,
        text: "از نحوه‌ی برخورد و درمان دکتر بسیار راضی بودم. توصیه می‌کنم.",
        createdDay: 5,
        likes: 4,
        doctorRate: 4.7,
        Related: false
    },
    {
        id: 53,
        name: "زهرا علیزاده",
        relId: 14,
        text: "دکتر بسیار خوش برخورد و حرفه‌ای هستند. از مشاوره‌اشون بسیار راضی بودم.",
        createdDay: 1,
        likes: 5,
        doctorRate: 4.9,
        Related: true
    },
    {
        id: 54,
        name: "رضا صفری",
        relId: 14,
        text: "تجربه‌ی بسیار خوبی بود. دکتر بسیار صبور و دلسوز هستند.",
        createdDay: 2,
        likes: 6,
        doctorRate: 4.8,
        Related: false
    },
    {
        id: 55,
        name: "نازنین رضایی",
        relId: 14,
        text: "ایشون جزو بهترین دکتر هایی هستند که تا به حال دیدم و واقعن از پذیرش شون راضی بودم",
        createdDay: 3,
        likes: 7,
        doctorRate: 5.0,
        Related: true
    },
    {
        id: 56,
        name: "مجید محمدی",
        relId: 14,
        text: "از نحوه‌ی برخورد و درمان دکتر بسیار راضی بودم. توصیه می‌کنم.",
        createdDay: 5,
        likes: 3,
        doctorRate: 4.7,
        Related: false
    },
    {
        id: 57,
        name: "لیلا حسینی",
        relId: 15,
        text: "دکتر بسیار خوش برخورد و حرفه‌ای هستند. از مشاوره‌اشون بسیار راضی بودم.",
        createdDay: 1,
        likes: 4,
        doctorRate: 4.9,
        Related: true
    },
    {
        id: 58,
        name: "حسین کریمی",
        relId: 15,
        text: "تجربه‌ی بسیار خوبی بود. دکتر بسیار صبور و دلسوز هستند.",
        createdDay: 2,
        likes: 5,
        doctorRate: 4.8,
        Related: false
    },
    {
        id: 59,
        name: "مریم محمودی",
        relId: 15,
        text: "ایشون جزو بهترین دکتر هایی هستند که تا به حال دیدم و واقعن از پذیرش شون راضی بودم",
        createdDay: 3,
        likes: 6,
        doctorRate: 5.0,
        Related: true
    },
    {
        id: 60,
        name: "احمد علیزاده",
        relId: 15,
        text: "از نحوه‌ی برخورد و درمان دکتر بسیار راضی بودم. توصیه می‌کنم.",
        createdDay: 5,
        likes: 2,
        doctorRate: 4.7,
        Related: false
    },
    {
        id: 61,
        name: "زهرا صفری",
        relId: 16,
        text: "دکتر بسیار خوش برخورد و حرفه‌ای هستند. از مشاوره‌اشون بسیار راضی بودم.",
        createdDay: 1,
        likes: 3,
        doctorRate: 4.9,
        Related: true
    },
    {
        id: 62,
        name: "محسن رضایی",
        relId: 16,
        text: "تجربه‌ی بسیار خوبی بود. دکتر بسیار صبور و دلسوز هستند.",
        createdDay: 2,
        likes: 4,
        doctorRate: 4.8,
        Related: false
    },
    {
        id: 63,
        name: "نرگس محمدی",
        relId: 16,
        text: "ایشون جزو بهترین دکتر هایی هستند که تا به حال دیدم و واقعن از پذیرش شون راضی بودم",
        createdDay: 3,
        likes: 5,
        doctorRate: 5.0,
        Related: true
    },
    {
        id: 64,
        name: "مهدی حسینی",
        relId: 16,
        text: "از نحوه‌ی برخورد و درمان دکتر بسیار راضی بودم. توصیه می‌کنم.",
        createdDay: 5,
        likes: 1,
        doctorRate: 4.7,
        Related: false
    },
    {
        id: 65,
        name: "سارا رضایی",
        relId: 17,
        text: "دکتر بسیار دلسوز و حرفه‌ای هستند. از مشاوره‌اشون بسیار راضی بودم.",
        createdDay: 1,
        likes: 6,
        doctorRate: 4.9,
        Related: true
    },
    {
        id: 66,
        name: "محمد حسینی",
        relId: 17,
        text: "تجربه‌ی بسیار خوبی بود. دکتر بسیار صبور و با حوصله هستند.",
        createdDay: 2,
        likes: 7,
        doctorRate: 4.8,
        Related: false
    },
    {
        id: 67,
        name: "فاطمه کریمی",
        relId: 17,
        text: "ایشون واقعاً بهترین دکتری هستند که تا به حال دیده‌ام. بسیار راضی بودم.",
        createdDay: 3,
        likes: 8,
        doctorRate: 5.0,
        Related: true
    },
    {
        id: 68,
        name: "علی محمودی",
        relId: 17,
        text: "از نحوه‌ی برخورد و درمان دکتر بسیار راضی بودم. توصیه می‌کنم.",
        createdDay: 5,
        likes: 4,
        doctorRate: 4.7,
        Related: false
    },
    {
        id: 69,
        name: "زهرا علیزاده",
        relId: 18,
        text: "دکتر بسیار خوش برخورد و حرفه‌ای هستند. از مشاوره‌اشون بسیار راضی بودم.",
        createdDay: 1,
        likes: 5,
        doctorRate: 4.9,
        Related: true
    },
    {
        id: 70,
        name: "رضا صفری",
        relId: 18,
        text: "تجربه‌ی بسیار خوبی بود. دکتر بسیار صبور و دلسوز هستند.",
        createdDay: 2,
        likes: 6,
        doctorRate: 4.8,
        Related: false
    },
    {
        id: 71,
        name: "نازنین رضایی",
        relId: 18,
        text: "ایشون جزو بهترین دکتر هایی هستند که تا به حال دیدم و واقعن از پذیرش شون راضی بودم",
        createdDay: 3,
        likes: 7,
        doctorRate: 5.0,
        Related: true
    },
    {
        id: 72,
        name: "مجید محمدی",
        relId: 18,
        text: "از نحوه‌ی برخورد و درمان دکتر بسیار راضی بودم. توصیه می‌کنم.",
        createdDay: 5,
        likes: 3,
        doctorRate: 4.7,
        Related: false
    },
    {
        id: 73,
        name: "لیلا حسینی",
        relId: 19,
        text: "دکتر بسیار خوش برخورد و حرفه‌ای هستند. از مشاوره‌اشون بسیار راضی بودم.",
        createdDay: 1,
        likes: 4,
        doctorRate: 4.9,
        Related: true
    },
    {
        id: 74,
        name: "حسین کریمی",
        relId: 19,
        text: "تجربه‌ی بسیار خوبی بود. دکتر بسیار صبور و دلسوز هستند.",
        createdDay: 2,
        likes: 5,
        doctorRate: 4.8,
        Related: false
    },
    {
        id: 75,
        name: "مریم محمودی",
        relId: 19,
        text: "ایشون جزو بهترین دکتر هایی هستند که تا به حال دیدم و واقعن از پذیرش شون راضی بودم",
        createdDay: 3,
        likes: 6,
        doctorRate: 5.0,
        Related: true
    },
    {
        id: 76,
        name: "احمد علیزاده",
        relId: 19,
        text: "از نحوه‌ی برخورد و درمان دکتر بسیار راضی بودم. توصیه می‌کنم.",
        createdDay: 5,
        likes: 2,
        doctorRate: 4.7,
        Related: false
    },
    {
        id: 77,
        name: "زهرا صفری",
        relId: 20,
        text: "دکتر بسیار خوش برخورد و حرفه‌ای هستند. از مشاوره‌اشون بسیار راضی بودم.",
        createdDay: 1,
        likes: 3,
        doctorRate: 4.9,
        Related: true
    },
    {
        id: 78,
        name: "محسن رضایی",
        relId: 20,
        text: "تجربه‌ی بسیار خوبی بود. دکتر بسیار صبور و دلسوز هستند.",
        createdDay: 2,
        likes: 4,
        doctorRate: 4.8,
        Related: false
    },
    {
        id: 79,
        name: "نرگس محمدی",
        relId: 20,
        text: "ایشون جزو بهترین دکتر هایی هستند که تا به حال دیدم و واقعن از پذیرش شون راضی بودم",
        createdDay: 3,
        likes: 5,
        doctorRate: 5.0,
        Related: true
    },
    {
        id: 80,
        name: "مهدی حسینی",
        relId: 20,
        text: "از نحوه‌ی برخورد و درمان دکتر بسیار راضی بودم. توصیه می‌کنم.",
        createdDay: 5,
        likes: 1,
        doctorRate: 4.7,
        Related: false
    },
    {
        id: 81,
        name: "سارا کریمی",
        relId: 21,
        text: "دکتر بسیار دلسوز و حرفه‌ای هستند. از مشاوره‌اشون بسیار راضی بودم.",
        createdDay: 1,
        likes: 6,
        doctorRate: 4.9,
        Related: true
    },
    {
        id: 82,
        name: "محمد محمودی",
        relId: 21,
        text: "تجربه‌ی بسیار خوبی بود. دکتر بسیار صبور و با حوصله هستند.",
        createdDay: 2,
        likes: 7,
        doctorRate: 4.8,
        Related: false
    },
    {
        id: 83,
        name: "فاطمه علیزاده",
        relId: 21,
        text: "ایشون واقعاً بهترین دکتری هستند که تا به حال دیده‌ام. بسیار راضی بودم.",
        createdDay: 3,
        likes: 8,
        doctorRate: 5.0,
        Related: true
    },
    {
        id: 84,
        name: "علی صفری",
        relId: 21,
        text: "از نحوه‌ی برخورد و درمان دکتر بسیار راضی بودم. توصیه می‌کنم.",
        createdDay: 5,
        likes: 4,
        doctorRate: 4.7,
        Related: false
    },
    {
        id: 85,
        name: "زهرا رضایی",
        relId: 22,
        text: "دکتر بسیار خوش برخورد و حرفه‌ای هستند. از مشاوره‌اشون بسیار راضی بودم.",
        createdDay: 1,
        likes: 5,
        doctorRate: 4.9,
        Related: true
    },
    {
        id: 86,
        name: "رضا حسینی",
        relId: 22,
        text: "تجربه‌ی بسیار خوبی بود. دکتر بسیار صبور و دلسوز هستند.",
        createdDay: 2,
        likes: 6,
        doctorRate: 4.8,
        Related: false
    },
    {
        id: 87,
        name: "نازنین کریمی",
        relId: 22,
        text: "ایشون جزو بهترین دکتر هایی هستند که تا به حال دیدم و واقعن از پذیرش شون راضی بودم",
        createdDay: 3,
        likes: 7,
        doctorRate: 5.0,
        Related: true
    },
    {
        id: 88,
        name: "مجید علیزاده",
        relId: 22,
        text: "از نحوه‌ی برخورد و درمان دکتر بسیار راضی بودم. توصیه می‌کنم.",
        createdDay: 5,
        likes: 3,
        doctorRate: 4.7,
        Related: false
    },
    {
        id: 89,
        name: "لیلا محمودی",
        relId: 23,
        text: "دکتر بسیار خوش برخورد و حرفه‌ای هستند. از مشاوره‌اشون بسیار راضی بودم.",
        createdDay: 1,
        likes: 4,
        doctorRate: 4.9,
        Related: true
    },
    {
        id: 90,
        name: "حسین صفری",
        relId: 23,
        text: "تجربه‌ی بسیار خوبی بود. دکتر بسیار صبور و دلسوز هستند.",
        createdDay: 2,
        likes: 5,
        doctorRate: 4.8,
        Related: false
    },
    {
        id: 91,
        name: "مریم رضایی",
        relId: 23,
        text: "ایشون جزو بهترین دکتر هایی هستند که تا به حال دیدم و واقعن از پذیرش شون راضی بودم",
        createdDay: 3,
        likes: 6,
        doctorRate: 5.0,
        Related: true
    },
    {
        id: 92,
        name: "احمد کریمی",
        relId: 23,
        text: "از نحوه‌ی برخورد و درمان دکتر بسیار راضی بودم. توصیه می‌کنم.",
        createdDay: 5,
        likes: 2,
        doctorRate: 4.7,
        Related: false
    },
    {
        id: 93,
        name: "زهرا حسینی",
        relId: 24,
        text: "دکتر بسیار خوش برخورد و حرفه‌ای هستند. از مشاوره‌اشون بسیار راضی بودم.",
        createdDay: 1,
        likes: 3,
        doctorRate: 4.9,
        Related: true
    },
    {
        id: 94,
        name: "محسن علیزاده",
        relId: 24,
        text: "تجربه‌ی بسیار خوبی بود. دکتر بسیار صبور و دلسوز هستند.",
        createdDay: 2,
        likes: 4,
        doctorRate: 4.8,
        Related: false
    },
    {
        id: 95,
        name: "نرگس محمودی",
        relId: 24,
        text: "ایشون جزو بهترین دکتر هایی هستند که تا به حال دیدم و واقعن از پذیرش شون راضی بودم",
        createdDay: 3,
        likes: 5,
        doctorRate: 5.0,
        Related: true
    },
    {
        id: 96,
        name: "مهدی صفری",
        relId: 24,
        text: "از نحوه‌ی برخورد و درمان دکتر بسیار راضی بودم. توصیه می‌کنم.",
        createdDay: 5,
        likes: 1,
        doctorRate: 4.7,
        Related: false
    },
    {
        id: 97,
        name: "سارا رضایی",
        relId: 25,
        text: "دکتر بسیار دلسوز و حرفه‌ای هستند. از مشاوره‌اشون بسیار راضی بودم.",
        createdDay: 1,
        likes: 6,
        doctorRate: 4.9,
        Related: true
    },
    {
        id: 98,
        name: "محمد حسینی",
        relId: 25,
        text: "تجربه‌ی بسیار خوبی بود. دکتر بسیار صبور و با حوصله هستند.",
        createdDay: 2,
        likes: 7,
        doctorRate: 4.8,
        Related: false
    },
    {
        id: 99,
        name: "فاطمه کریمی",
        relId: 25,
        text: "ایشون واقعاً بهترین دکتری هستند که تا به حال دیده‌ام. بسیار راضی بودم.",
        createdDay: 3,
        likes: 8,
        doctorRate: 5.0,
        Related: true
    },
    {
        id: 100,
        name: "علی محمودی",
        relId: 25,
        text: "از نحوه‌ی برخورد و درمان دکتر بسیار راضی بودم. توصیه می‌کنم.",
        createdDay: 5,
        likes: 4,
        doctorRate: 4.7,
        Related: false
    },
]