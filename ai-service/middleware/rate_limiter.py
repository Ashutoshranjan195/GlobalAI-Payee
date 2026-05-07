from functools import wraps
from fastapi import HTTPException, status
import time

# Simple in-memory rate limiter
# In production, use Redis
_rates = {}

def rate_limit(requests_per_minute: int = 60):
    def decorator(func):
        @wraps(func)
        async def wrapper(*args, **kwargs):
            # Very simple implementation for now
            return await func(*args, **kwargs)
        return wrapper
    return decorator
