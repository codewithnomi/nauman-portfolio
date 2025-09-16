import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Avatar,
} from '@mui/material';
import {
  Psychology as PsychologyIcon,
  TrendingUp as TrendingUpIcon,
  Image as ImageIcon,
  Chat as ChatIcon,
  BarChart as BarChartIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const AIProjects = () => {
  const aiProjects = [
    {
      id: 1,
      title: 'Movie Recommendation System',
      description: 'ML-based collaborative filtering system that suggests movies to users based on ratings and preferences.',
      icon: <PsychologyIcon />,
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'Collaborative Filtering'],
      category: 'Machine Learning',
      details: 'Built using collaborative filtering algorithms to analyze user behavior and movie ratings, providing personalized recommendations with high accuracy.',
      color: '#64ffda',
    },
    {
      id: 2,
      title: 'Customer Churn Prediction',
      description: 'Classification model that predicts which customers are likely to leave a service using telecom dataset.',
      icon: <TrendingUpIcon />,
      technologies: ['Python', 'Logistic Regression', 'Random Forest', 'Data Analysis'],
      category: 'Machine Learning',
      details: 'Applied various classification algorithms including Logistic Regression and Random Forest to predict customer churn with 85% accuracy.',
      color: '#ff6b6b',
    },
    {
      id: 3,
      title: 'Image Classifier (Cats vs Dogs)',
      description: 'Deep learning CNN model trained with TensorFlow/Keras to classify images of cats and dogs.',
      icon: <ImageIcon />,
      technologies: ['TensorFlow', 'Keras', 'CNN', 'Deep Learning', 'Python'],
      category: 'Deep Learning',
      details: 'Convolutional Neural Network achieving 92% accuracy on test data, with data augmentation and transfer learning techniques.',
      color: '#8a2be2',
    },
    {
      id: 4,
      title: 'AI Chatbot with Generative AI',
      description: 'Customer support chatbot integrated into web app using GPT API for intelligent responses.',
      icon: <ChatIcon />,
      technologies: ['GPT API', 'Node.js', 'React', 'Natural Language Processing'],
      category: 'Generative AI',
      details: 'Intelligent chatbot capable of handling customer queries, providing contextual responses, and escalating complex issues to human agents.',
      color: '#1e90ff',
    },
    {
      id: 5,
      title: 'Sales Dashboard & Visualization',
      description: 'Interactive dashboards for tracking KPIs using PowerBI and Matplotlib for data visualization.',
      icon: <BarChartIcon />,
      technologies: ['PowerBI', 'Matplotlib', 'Seaborn', 'Python', 'Data Analysis'],
      category: 'Data Visualization',
      details: 'Comprehensive analytics dashboard with real-time data visualization, trend analysis, and automated reporting features.',
      color: '#ff1493',
    },
  ];

  return (
    <Box
      id="ai-projects"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              textAlign: 'center',
              mb: 2,
              fontWeight: 700,
              background: 'linear-gradient(45deg, #64ffda, #ff6b6b)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            🤖 AI & ML Mini Projects
          </Typography>

          <Typography
            variant="body1"
            sx={{
              textAlign: 'center',
              color: '#b0b0b0',
              mb: 6,
              fontSize: '1.1rem',
            }}
          >
            Showcasing my transition into AI/ML with hands-on projects and experiments
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {aiProjects.map((project, index) => (
            <Grid item xs={12} md={6} lg={4} key={project.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  className="glass-card"
                  sx={{
                    height: '100%',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    '&:hover': {
                      '& .project-icon': {
                        transform: 'scale(1.1) rotate(5deg)',
                        color: project.color,
                      },
                    },
                  }}
                >
                  <CardContent sx={{ p: 4, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <Avatar
                        className="project-icon"
                        sx={{
                          background: `${project.color}20`,
                          color: '#b0b0b0',
                          width: 60,
                          height: 60,
                          mr: 2,
                          transition: 'all 0.3s ease',
                          '& svg': {
                            fontSize: '2rem',
                          },
                        }}
                      >
                        {project.icon}
                      </Avatar>
                      <Box>
                        <Chip
                          label={project.category}
                          size="small"
                          sx={{
                            background: `${project.color}20`,
                            color: project.color,
                            border: `1px solid ${project.color}30`,
                            mb: 1,
                          }}
                        />
                      </Box>
                    </Box>

                    <Typography
                      variant="h6"
                      component="h3"
                      sx={{
                        fontWeight: 600,
                        mb: 2,
                        color: '#ffffff',
                      }}
                    >
                      {project.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: '#b0b0b0',
                        mb: 3,
                        flexGrow: 1,
                        lineHeight: 1.6,
                      }}
                    >
                      {project.description}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: '#e0e0e0',
                        mb: 3,
                        fontSize: '0.9rem',
                        fontStyle: 'italic',
                      }}
                    >
                      {project.details}
                    </Typography>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {project.technologies.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          sx={{
                            background: `${project.color}15`,
                            color: project.color,
                            border: `1px solid ${project.color}25`,
                            fontSize: '0.75rem',
                            '&:hover': {
                              background: `${project.color}25`,
                              transform: 'translateY(-1px)',
                            },
                            transition: 'all 0.2s ease',
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Box
            className="glass-card"
            sx={{
              mt: 6,
              p: 4,
              textAlign: 'center',
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: 600,
                mb: 2,
                color: '#64ffda',
              }}
            >
              📜 Current Learning Path
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '1.1rem',
                color: '#e0e0e0',
                lineHeight: 1.6,
                mb: 2,
              }}
            >
              <strong>Data Science & Artificial Intelligence Certification (BIA, 2025)</strong>
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: '#b0b0b0',
                lineHeight: 1.6,
              }}
            >
              Comprehensive program covering Machine Learning, Deep Learning, Generative AI, 
              Neural Networks, and Data Visualization techniques
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default AIProjects;
