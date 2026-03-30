'use client';

import { motion } from 'framer-motion';

export default function ServiceCard({ icon: Icon, title, description, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-secondary text-secondary-foreground rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full"
    >
      <div className="mb-6">
        <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
          <Icon className="w-8 h-8 text-primary" />
        </div>
      </div>
      <h3 className="text-2xl font-bold mb-4 text-secondary-foreground">{title}</h3>
      <p className="text-secondary-foreground/80 leading-relaxed flex-grow">{description}</p>
    </motion.div>
  );
}
