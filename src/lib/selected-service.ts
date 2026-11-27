"use client"

import { useSyncExternalStore } from "react"
import { services } from "@/data/site"

export type ServiceId = (typeof services)[number]["id"]

let selectedId: ServiceId = services[0].id
const listeners = new Set<() => void>()

function isServiceId(id: string): id is ServiceId {
  return services.some((service) => service.id === id)
}

export function selectService(id: string) {
  if (!isServiceId(id) || id === selectedId) return
  selectedId = id
  for (const listener of listeners) listener()
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

export function onServiceChange(listener: (id: ServiceId) => void) {
  const unsubscribe = subscribe(() => listener(selectedId))
  return () => {
    unsubscribe()
  }
}

export function useSelectedService() {
  return useSyncExternalStore(
    subscribe,
    () => selectedId,
    () => services[0].id,
  )
}
