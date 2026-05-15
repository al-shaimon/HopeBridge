"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Testimonial } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

export function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full bg-card/40 glass border-border/50 relative overflow-hidden group">
        <div className="absolute top-4 right-4 text-primary/10 group-hover:text-primary/20 transition-colors">
          <Quote className="w-16 h-16" />
        </div>
        <CardContent className="p-8 relative z-10 flex flex-col h-full">
          <div className="flex-1">
            <p className="text-lg italic text-muted-foreground mb-8 leading-relaxed">
              &quot;{testimonial.content}&quot;
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Avatar className="h-12 w-12 border-2 border-primary/20">
              <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
              <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
              <p className="text-sm text-muted-foreground">{testimonial.role}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
