'use client'

import { useEffect, useState } from 'react'
import {
  fetchCertificates,
  fetchProjects,
  fetchTechStacks,
  defaultProjects,
  defaultCertificates,
  defaultTechStacks,
} from '@/lib/portfolioService'

export default function usePortfolio() {
  const [projects, setProjects] = useState<any[]>(defaultProjects)
  const [certificates, setCertificates] = useState<any[]>(defaultCertificates)
  const [techStacks, setTechStacks] = useState<any[]>(defaultTechStacks)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    loadPortfolio()
  }, [])

  const loadPortfolio = async () => {
    try {
      const [
        projectsData,
        certificatesData,
        techStacksData,
      ] = await Promise.all([
        fetchProjects(),
        fetchCertificates(),
        fetchTechStacks(),
      ])

      if (projectsData && projectsData.length > 0) setProjects(projectsData)
      if (certificatesData && certificatesData.length > 0) setCertificates(certificatesData)
      if (techStacksData && techStacksData.length > 0) setTechStacks(techStacksData)
    } catch {
      // default data is already set
    } finally {
      setLoading(false)
    }
  }

  return {
    projects,
    certificates,
    techStacks,
    loading,
  }
}