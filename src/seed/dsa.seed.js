import mongoose from 'mongoose';
import Topic from '../models/Topic.model.js';
import { env } from '../config/env.js';

const seedTopics = async () => {
  try {
    await mongoose.connect(env.MONGO_URI);
    console.log('🌱 Seeding topics with articles...');

    await Topic.deleteMany();

    await Topic.insertMany([
      {
        title: 'Arrays',
        order: 1,
        problems: [
          {
            slug: 'two-sum',
            title: 'Two Sum',
            difficulty: 'Easy',
            leetcode: 'https://leetcode.com/problems/two-sum/',
            youtube: 'https://www.youtube.com/watch?v=KLlXCFG5TnA',
            article: 'https://leetcode.com/articles/two-sum/',
          },
          {
            slug: 'best-time-to-buy-sell-stock',
            title: 'Best Time to Buy and Sell Stock',
            difficulty: 'Easy',
            leetcode:
              'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/',
            youtube: 'https://www.youtube.com/watch?v=1pkOgXD63yU',
            article:
              'https://leetcode.com/articles/best-time-to-buy-and-sell-stock/',
          },
          {
            slug: 'maximum-subarray',
            title: 'Maximum Subarray',
            difficulty: 'Medium',
            leetcode:
              'https://leetcode.com/problems/maximum-subarray/',
            youtube: 'https://www.youtube.com/watch?v=5WZl3MMT0Eg',
            article:
              'https://leetcode.com/articles/maximum-subarray/',
          },
        ],
      },

      {
        title: 'Binary Search',
        order: 2,
        problems: [
          {
            slug: 'binary-search',
            title: 'Binary Search',
            difficulty: 'Easy',
            leetcode:
              'https://leetcode.com/problems/binary-search/',
            youtube: 'https://www.youtube.com/watch?v=P3YID7liBug',
            article:
              'https://leetcode.com/articles/binary-search/',
          },
          {
            slug: 'search-in-rotated-sorted-array',
            title: 'Search in Rotated Sorted Array',
            difficulty: 'Medium',
            leetcode:
              'https://leetcode.com/problems/search-in-rotated-sorted-array/',
            youtube: 'https://www.youtube.com/watch?v=oTfPJKGEHcc',
            article:
              'https://leetcode.com/articles/search-in-rotated-sorted-array/',
          },
        ],
      },

      {
        title: 'Linked List',
        order: 3,
        problems: [
          {
            slug: 'reverse-linked-list',
            title: 'Reverse Linked List',
            difficulty: 'Easy',
            leetcode:
              'https://leetcode.com/problems/reverse-linked-list/',
            youtube: 'https://www.youtube.com/watch?v=G0_I-ZF0S38',
            article:
              'https://leetcode.com/articles/reverse-linked-list/',
          },
          {
            slug: 'linked-list-cycle',
            title: 'Linked List Cycle',
            difficulty: 'Easy',
            leetcode:
              'https://leetcode.com/problems/linked-list-cycle/',
            youtube: 'https://www.youtube.com/watch?v=gBTe7lFR3vc',
            article:
              'https://leetcode.com/articles/linked-list-cycle/',
          },
          {
            slug: 'merge-two-sorted-lists',
            title: 'Merge Two Sorted Lists',
            difficulty: 'Easy',
            leetcode:
              'https://leetcode.com/problems/merge-two-sorted-lists/',
            youtube: 'https://www.youtube.com/watch?v=XIdigk956u0',
            article:
              'https://leetcode.com/articles/merge-two-sorted-lists/',
          },
        ],
      },

      {
        title: 'Dynamic Programming',
        order: 4,
        problems: [
          {
            slug: 'climbing-stairs',
            title: 'Climbing Stairs',
            difficulty: 'Easy',
            leetcode:
              'https://leetcode.com/problems/climbing-stairs/',
            youtube: 'https://www.youtube.com/watch?v=Y0lT9Fck7qI',
            article:
              'https://leetcode.com/articles/climbing-stairs/',
          },
          {
            slug: 'house-robber',
            title: 'House Robber',
            difficulty: 'Medium',
            leetcode:
              'https://leetcode.com/problems/house-robber/',
            youtube: 'https://www.youtube.com/watch?v=73r3KWiEvyk',
            article:
              'https://leetcode.com/articles/house-robber/',
          },
          {
            slug: 'coin-change',
            title: 'Coin Change',
            difficulty: 'Tough',
            leetcode:
              'https://leetcode.com/problems/coin-change/',
            youtube: 'https://www.youtube.com/watch?v=H9bfqozjoqs',
            article:
              'https://leetcode.com/articles/coin-change/',
          },
        ],
      },
    ]);

    console.log('✅ Topics seeded successfully');
    process.exit(0);
  } catch (err) {
    console.error('❌ Seeding failed', err);
    process.exit(1);
  }
};

seedTopics();